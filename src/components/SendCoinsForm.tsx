import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Web3 from "web3";
import { sendCoins } from "../lib/sendCoins";

type PropsType = {
  web3Instance: Web3;
  tokenInstance: any;
  onReturn: () => void;
};

const SendCoinsForm = ({
  web3Instance,
  tokenInstance,
  onReturn,
}: PropsType) => {
  const [amount, setAmount] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const onComplete = () => {
    setAmount(0);
    setAddress("");
    onReturn();
  };

  const onSend = async () => {
    setIsLoading(true);
    const [error] = await sendCoins(
      web3Instance,
      tokenInstance,
      address,
      amount
    );
    setIsLoading(false);
    if (!error) onComplete();
  };

  const handleNumericInput = (event: any) => {
    if (event.target.value === "") return setAmount(0);
    setAmount(
      parseInt(
        event.target.value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1")
      )
    );
  };

  return (
    <div className="container">
      <h2>Send Funds</h2>
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        name="amount"
        value={amount}
        onChange={handleNumericInput}
      />
      <div className="button-group">
        <button
          className="button primary"
          onClick={onSend}
          disabled={isLoading || !amount || !address}
        >
          Send
        </button>
        <button className="button primary invert" onClick={onComplete}>
          Go back
        </button>
        <ClipLoader color="black" loading={isLoading} size={40} />
      </div>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          padding: 20px;
          font-family: "SpaceMono";
        }

        label,
        input {
          font-size: 20px;
        }

        input {
          margin: 10px 0px;
        }
      `}</style>
    </div>
  );
};

export default SendCoinsForm;
