export type UserBalance = {
  name: string;
  address: string;
  balance: number;
};

export type Tokens = {
  token: string;
  balance: number;
  userBalances: UserBalance[];
};

export type AccountType = {
  name: string;
  address: string;
  balance: number;
};
