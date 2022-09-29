import Web3 from "web3";

export const validateAddress = (web3Instance: Web3, address: string): boolean => {
    return (!web3Instance.utils.isAddress(address))
}
export const validateName = (name: string) => { return name === ""}
export const validateAmount = (amount: number) => { return amount === 0}