import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import Web3 from "web3";
import { sendCoins } from "../lib/sendCoins";
import { validateAddress, validateAmount } from "../lib/validators";

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
  const [hasAmountError, setHasAmountError] = useState<boolean>(false)
  const [hasAddressError, setHasAddressError] = useState<boolean>(false);

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
        className={`${hasAddressError ? "error" : ""}`}
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        onBlur={() => setHasAddressError(validateAddress(web3Instance, address))}
      />
      <label htmlFor="amount">Amount</label>
      <input
        type="text"
        name="amount"
        className={`${hasAmountError ? "error" : ""}`}
        value={amount}
        onChange={handleNumericInput}
        onBlur={() => setHasAmountError(validateAmount(amount))}
      />
      <div className="button-group">
        <button
          className="button primary"
          onClick={onSend}
          disabled={isLoading || !amount || !address || hasAddressError || hasAmountError}
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
      `}</style>
    </div>
  );
};

export default SendCoinsForm;
