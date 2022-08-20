import React, { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Layout from "../components/Layout";
import Web3 from "web3";
import tokenABI from "../lib/tokenABI";
import { useState } from "react";
import { AccountType } from "../interfaces";
import { getUsers } from "../lib/getUsers";
import { ScreenType } from "../types/ScreenType";
import SendCoinsForm from "../components/SendCoinsForm";
import AddUserForm from "../components/AddUserForm";
import Leaderboard from "../components/Leaderboard";

const tokenAddresses = [
  {
    address: "0xd5003296ac2c09d8fabb412ba1a2cdf50d959496",
    token: "LC",
  },
];

const ALLOWED_NETWORK = "rinkeby";

const IndexPage = () => {
  const [accounts, setAccounts] = useState<AccountType[]>([]);
  const [web3Enabled, setWeb3Enabled] = useState(false);
  const [isLoadingLeaderboard, setLoadingLeaderBoard] = useState(false);
  const [screenType, setScreenType] = useState(ScreenType.LEADERBOARD);
  const [web3Instance, setWeb3Instance] = useState<Web3>();
  const [tokenInstance, setTokenInstance] = useState<any>();

  useEffect(() => {
    if ((window as any).ethereum) {
      setWeb3Enabled(true);
    } else {
      window.alert("Please install Metamask");
    }
  }, []);

  const loadBlockchainData = async () => {
    // Empty web3 instance
    let web3: Web3 = new Web3();

    if (web3Enabled) {
      web3 = new Web3((window as any).ethereum);
      setWeb3Instance(web3);
      const netId = await web3.eth.net.getNetworkType();

      if (netId !== ALLOWED_NETWORK) {
        window.alert("Please change into Rinkeby Network on Metamask");
        return;
      }

      const accs = await web3.eth.getAccounts();

      const newAccounts = await Promise.all(
        accs.map(async (address: string) => {
          const balance = await web3.eth.getBalance(address);

          const tokenBalances = await Promise.all(
            tokenAddresses.map(async (token) => {
              const tokenInst = new web3.eth.Contract(tokenABI, token.address);
              setTokenInstance(tokenInst);

              const balance = await tokenInst.methods.balanceOf(address).call();

              const promises: any[] = [];

              setLoadingLeaderBoard(true);

              // fetch users from database
              const users = await getUsers();

              users.forEach((u) => {
                const promise = tokenInst.methods.balanceOf(u.address).call();
                promises.push(promise);
              });

              const balances = await Promise.all(promises);
              const mappedBalance = balances.map((b, i) => {
                return {
                  name: users[i].name,
                  address: users[i].address,
                  balance: Number(web3.utils.fromWei(b, "ether")),
                };
              });
              mappedBalance.sort((a, b) => b.balance - a.balance);

              return {
                token: token.token,
                balance: Number(web3.utils.fromWei(balance, "ether")),
                userBalances: mappedBalance,
              };
            })
          );

          return {
            address,
            balance: Number(web3.utils.fromWei(balance, "ether")),
            tokens: tokenBalances,
          };
        })
      );
      setAccounts(newAccounts);
      setLoadingLeaderBoard(false);
    } else {
      window.alert("Please install Metamask");
    }
  };

  const loginToMetaMask = async () => {
    await (window as any).ethereum.request({ method: "eth_requestAccounts" });
    loadBlockchainData();
    setWeb3Enabled(true);
  };

  const navigateToLeaderboard = async () => {
    setLoadingLeaderBoard(true);
    setScreenType(ScreenType.LEADERBOARD);
    await loadBlockchainData();
  };
  const navigateToAddUserForm = () => setScreenType(ScreenType.ADD_USER);
  const navigateToSendCoinsForm = () => setScreenType(ScreenType.SEND_COINS);

  return (
    <Layout title="Leaderboard">
      <h1>Leaderboard</h1>

      {web3Enabled && accounts.length === 0 && (
        <div className="actions">
          <button className="actions primary" onClick={loginToMetaMask}>
            Must hold 50 $LC to unlock
          </button>
        </div>
      )}

      {!web3Enabled && (
        <div className="actions">
          <a href="https://metamask.io/download.html" target="_blank">
            Install Metamask
          </a>
        </div>
      )}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "5px 0px",
        }}
      >
        <ClipLoader color="white" loading={isLoadingLeaderboard} size={40} />
      </div>

      {accounts &&
        accounts.length > 0 &&
        !isLoadingLeaderboard &&
        screenType === ScreenType.LEADERBOARD && (
          <div className="actions button-group">
            <button className="button primary" onClick={navigateToAddUserForm}>
              Add new peer
            </button>
            <button
              className="button primary invert"
              onClick={navigateToSendCoinsForm}
            >
              Send funds
            </button>
          </div>
        )}

      {accounts &&
        accounts.length > 0 &&
        !isLoadingLeaderboard &&
        screenType === ScreenType.LEADERBOARD && (
          <div className="accounts">
            {accounts.map((account) => {
              return (
                <div className="main-panel" key={account.address}>
                  <Leaderboard account={account} />
                </div>
              );
            })}
          </div>
        )}

      {accounts &&
        accounts.length > 0 &&
        !isLoadingLeaderboard &&
        screenType === ScreenType.ADD_USER && (
          <div className="main-panel add-user">
            {web3Instance && tokenInstance ? (
              <AddUserForm
                web3Instance={web3Instance}
                onReturn={navigateToLeaderboard}
              />
            ) : (
              <p>Please install Metamask and log in.</p>
            )}
          </div>
        )}

      {accounts &&
        accounts.length > 0 &&
        !isLoadingLeaderboard &&
        screenType === ScreenType.SEND_COINS && (
          <div className="main-panel send-funds">
            {web3Instance && tokenInstance ? (
              <SendCoinsForm
                web3Instance={web3Instance}
                tokenInstance={tokenInstance}
                onReturn={navigateToLeaderboard}
              />
            ) : (
              <p>Please install Metamask and log in.</p>
            )}
          </div>
        )}

      <style jsx global>
        {`
          body {
            padding: 0px;
            margin: 0px;
            background: url("images/background.png");
            overflow: hidden;
          }

          button.primary {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px 25px;
            border-radius: 10px;
            font-family: "SpaceMono";
            font-style: normal;
            font-weight: 700;
            font-size: 22px;
            line-height: 149%;
            background: #03efcb;
            letter-spacing: 0.02em;
            text-transform: uppercase;
            margin: 0px 10px;

            color: #322850;

            text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.15);
          }

          button.primary:hover:not(:disabled),
          button.primary.invert:hover:not(:disabled) {
            background: #f617bd;
            cursor: pointer;
          }

          button.primary.invert {
            background: #ffffff;
            color: #322850;
          }

          div.button-group {
            display: flex;
            margin: 15px 0px;
            align-items: center;
          }

          button.primary:disabled {
            opacity: 0.5;
          }

          label,
          input {
            font-size: 20px;
          }

          input {
            border-radius: 6px;
            padding: 6px 10px;
            margin: 10px 0px;
            border: 2px solid #ccc;
          }

          input.error {
            border: 2px solid red;
          }

          ::-webkit-scrollbar {
            width: 15px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #076385;
            border-radius: 4px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #097CA6;
          }
        `}
      </style>
      <style jsx>{`
        h1 {
          font-family: "I pixel u";
          font-style: normal;
          font-weight: 400;
          font-size: 78px;
          line-height: 149%;

          display: flex;
          align-items: center;
          text-align: center;
          letter-spacing: 0.01em;
          text-transform: uppercase;

          color: #ebf9fe;
          margin-bottom: 20px;
        }

        h2 {
          text-transform: uppercase;
        }

        .warning {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          color: red;
          font-family: "Recoleta Regular DEMO";
        }

        .main-panel {
          margin-top: 10px;
          color: black;
          font-family: "Recoleta Regular DEMO";
          background-color: #ebf9fe;
          border-radius: 10px;
          padding: 0px 20px;
          max-height: 50vh;
          width: clamp(50vw, 900px, 90vw);
          overflow: auto;
          border-width: 5px;
          border-style: solid;
          border-color: #03efcb #f617bd #f617bd #03efcb;
        }

        .play {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 30px;
          color: black;
          font-family: "Recoleta Regular DEMO";
        }

        .3d-scene {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
          color: red;
        }

        button {
          border: none;
          border-radius: 10px;
          padding: 15px;
          cursor: pointer;
          font-family: "Recoleta Regular DEMO";
          text-transform: uppercase;
          margin: 0px 10px;
        }

        button:hover {
          background: grey;
        }

        .account {
          margin: 5px;
          font-family: "Recoleta Regular DEMO";
          margin-bottom: 100px;
        }
      `}</style>
    </Layout>
  );
};

export default IndexPage;
