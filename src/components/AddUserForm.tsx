import React, { useState } from "react";
import Web3 from "web3";
import { upsertUser } from "../lib/upsertUser";

type PropsType = {
  web3Instance: Web3;
  onReturn: () => void;
};

const AddUserForm = ({ web3Instance, onReturn }: PropsType) => {
  const [address, setAddress] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
        onChange={(event) => setName(event.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <div className="button-group">
        <button
          className="button primary"
          onClick={onAdd}
          disabled={isLoading || !name || !address}
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

export default AddUserForm;
