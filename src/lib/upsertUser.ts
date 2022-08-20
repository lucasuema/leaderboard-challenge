import { UserAccountError } from "./../types/ErrorType";
import { UserBalance } from "../interfaces";
import { supabase } from "./db";
import Web3 from "web3";

type NewUserType = {
  name: UserBalance["name"];
  address: UserBalance["address"];
};

export const upsertUser = async (web3Instance: Web3, newUser: NewUserType) => {
  // validate name and address
  if (
    !newUser.name ||
    !newUser.address ||
    !web3Instance.utils.isAddress(newUser.address)
  ) {
    window.alert(UserAccountError.INVALID_INPUTS);
    return [UserAccountError.INVALID_INPUTS, null];
  }

  // update name or create new user (no need to check if exists)
  try {
    const { error, data } = await supabase.from("users").upsert([newUser]);
    if (error) throw error;
    console.info(
      `Added new user with address ${data[0].address.substring(0, 5)}...`
    );
    return [null, data[0]];
  } catch (error) {
    window.alert(error);
    return [error, null];
  }
};
