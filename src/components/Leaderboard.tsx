import React from "react";
import { AccountType } from "../interfaces";

type PropTypes = {
  account: AccountType;
};

export default function Account({ account }: PropTypes) {
  return (
    <>
      <div className="account">
        <div className="tokens">
          {account.tokens.map((token) => {
            console.log(token)
            return (
              <div className="token" key={token.token}>
                <div className="balance"></div>
                <div className="result">
                  {token.balance < 50 && (
                    <label>
                      🥺 You need 50 $LC, ask lucas@latecheckout.studio for some.
                    </label>
                  )}
                  {token.balance > 50 && (
                    <div className="result">
                      <div>
                        {
                          token.userBalances.map((u, key) => {
                            return (
                              <div key={key} className="result">
                                <label>
                                {u.name}: {u.balance} {key <=2 && '👑'}
                                </label>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .account {
          border-radius: borderRadius;
        }
        label {
          font-weight: bold;
        }
        .balance {
          display: flex;
        }
        .result {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 5px;
        }
        .balance-value {
          margin-left: 15px;
        }
      `}</style>
    </>
  );
}