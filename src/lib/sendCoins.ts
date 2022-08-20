import Web3 from "web3";
import { TransactionError } from "../types/ErrorType";

const handleError = (err: TransactionError) => {
  window.alert(err);
  return [err, null];
};

export const sendCoins = async (
  web3Instance: Web3,
  tokenInstance: any,
  toAddress: string | undefined,
  amount: number | undefined
) => {
  // check that props are defined
  if (!toAddress || !amount) {
    return handleError(TransactionError.MISSING_PROPS);
  }

  // get user account
  const ethereum = (window as any).ethereum;
  if (!ethereum.selectedAddress) {
    await ethereum.enable();
  }
  const fromAddress = ethereum.selectedAddress;
  if (!web3Instance.utils.isAddress(fromAddress)) {
    return handleError(TransactionError.NO_CONNECTED_WALLET);
  }

  // check that wallet addresses are valid
  if (!web3Instance.utils.isAddress(toAddress)) {
    return handleError(TransactionError.INVALID_ADDRESS);
  }

  // check that user has enough funds
  const b = await tokenInstance.methods.balanceOf(fromAddress).call();
  const fromBalance = Number(web3Instance.utils.fromWei(b, "ether"));
  if (fromBalance < amount) {
    return handleError(TransactionError.INSUFFICIENT_FUNDS);
  }

  // send transaction
  try {
    const response = await tokenInstance.methods
      .transfer(toAddress, web3Instance.utils.toWei(amount.toString(), "ether"))
      .send({ from: fromAddress })
      .then((hash: any) => {
        return hash;
      });
    console.info(`Sent ${amount} tokens to ${toAddress.substring(0, 5)}...`);
    return [null, response];
  } catch (error) {
    window.alert(error);
    return [error, null];
  }
};
