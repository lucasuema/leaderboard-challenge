import React, {useState} from "react";
import { AccountType } from "../interfaces";

type PropTypes = {
  mappedBalanceState: AccountType[];
  userLcBalance: Number;
};

export default function Leaderboard({
  mappedBalanceState,
  userLcBalance,
}: PropTypes) {
  const [showLcLeaderboard, setShowLcLeaderboard] = useState(false);

  const toggleLeaderboard = () => {
    setShowLcLeaderboard(!showLcLeaderboard);
    console.log("mappedBalanceState", mappedBalanceState)
    console.log("userLcBalance", userLcBalance)
  };
  return (
    <>
      <div className="button-wrapper">
        <button className="button" onClick={toggleLeaderboard}>
          See Leaderboard
        </button>
      </div>
      <div className="tokens">
        <div className="token">
          <div className="balance"></div>
          <div className="result">
            {userLcBalance > 50 && (
              <div>
          
                  <div className="wrapper">
                    <div className="result">
                      <div>
                        {mappedBalanceState.map((u, key) => {
                          return (
                            <div key={key} className="result-leaderboard">
                              <label>
                                {key <= 2 && "👑"} {u.name}: {u.balance}{" "}
                                {"(" + "$" + Math.trunc(u.balance * 0.1) + ")"}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          background: #fbfaf6;
          border: 1px solid #000000;
          box-sizing: border-box;
          border-radius: 10px;
          width: 400px;
          max-height: 200px;
          overflow-y: auto;
          justify-content: flex-start;
          padding-top: 300px;
          margin: 0px auto 40px;
          padding: 20px;
          display: flex;
          align-items: center;
          flex-direction: column;
          font-family: "Recoleta Regular DEMO";
        }
        .balance {
          display: flex;
        }
        .button-wrapper {
          margin: 0px auto 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: row;
          font-family: "Recoleta Regular DEMO";
        }
        button {
          background: black;
          float: left;
          color: white;
          border: none;
          border-radius: 10px;
          padding: 15px;
          cursor: pointer;
          font-family: "Recoleta Regular DEMO";
        }
        .result {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 0px;
          font-size: 20px;
          font-family: "Recoleta Regular DEMO";
        }
        .result-leaderboard {
          display: flex;
          align-items: left;
          justify-content: left;
          margin-top: 0px;
          font-size: 20px;
          font-family: "Recoleta Regular DEMO";
        }
      `}</style>
    </>
  );
}