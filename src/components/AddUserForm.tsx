import React, { useState } from "react";
import Web3 from "web3";
import { upsertUser } from "../lib/upsertUser";
import { validateAddress, validateName } from "../lib/validators";

type PropsType = {
  web3Instance: Web3;
  onReturn: () => void;
};

const AddUserForm = ({ web3Instance, onReturn }: PropsType) => {
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasNameError, setHasNameError] = useState<boolean>(false)
  const [hasAddressError, setHasAddressError] = useState<boolean>(false);

  const onComplete = () => {
    setName("");
    setAddress("");
    onReturn();
  };

  const onAdd = async () => {
    setIsLoading(true);
    const [error] = await upsertUser(web3Instance, { address, name });
    setIsLoading(false);
    if (!error) onComplete();
  };

  return (
    <div className="container">
      <h2>Add User</h2>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={name}
        className={`${hasNameError ? "error" : ""}`}
        onChange={(event) => setName(event.target.value)}
        onBlur={() => setHasNameError(validateName(name))}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        className={`${hasAddressError ? "error" : ""}`}
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        onBlur={() => setHasAddressError(validateAddress(web3Instance, address))}
      />
      <div className="button-group">
        <button
          className="button primary"
          onClick={onAdd}
          disabled={isLoading || !name || !address || hasNameError || hasAddressError}
        >
          Add
        </button>
        <button
          className="button primary invert"
          onClick={onComplete}
          disabled={isLoading}
        >
          Go back
        </button>
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

export default AddUserForm;
