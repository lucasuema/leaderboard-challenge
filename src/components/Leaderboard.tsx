import React from "react";
import { AccountType } from "../interfaces";
import { useTable, Column, Cell } from "react-table";

type PropTypes = {
  account: AccountType;
};

const renderIcon = (key: number) => {
  switch (key) {
    case 0:
      return "🥇";
    case 1:
      return "🥈";
    case 2:
      return "🥉";
    default:
      return "";
  }
};

const leaderboardToken = "LC";

type Cols = {
  icon: string;
  rank: number;
  name: string;
  address: string;
  coins: string;
};

export default function Leaderboard({ account }: PropTypes) {
  // create column definitions for table
  const columns: Column<Cols>[] = React.useMemo(
    () => [
      {
        Header: "👑",
        accessor: "icon",
      },
      {
        Header: "Rank",
        accessor: "rank",
      },
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "$LC",
        accessor: "coins",
      },
    ],
    []
  );

  // prepare data for table
  const data = React.useMemo((): Cols[] => {
    const leaderboardData = account.tokens.find(
      (token) => token.token === leaderboardToken
    );
    if (!leaderboardData) return [];
    return leaderboardData.userBalances.map((u, key) => {
      return {
        icon: renderIcon(key),
        rank: key + 1,
        // profile: ,
        name: u.name,
        address: u.address.substring(0, 5) + "..." + u.address.slice(-3),
        coins: `$${u.balance}`,
      };
    });
  }, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="account">
        {account.tokens.map((token) => {
          return (
            <div className="token" key={token.token}>
              <div className="balance"></div>
              <div className="result">
                {token.balance < 50 ? (
                  <label>
                    🥺 You need 50 $LC, ask lucas@latecheckout.studio for some.
                  </label>
                ) : (
                  <div className="result">
                    <table {...getTableProps()}>
                      <thead>
                        {headerGroups.map((headerGroup: any) => (
                          <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                              <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                              </th>
                            ))}
                          </tr>
                        ))}
                      </thead>
                      <tbody {...getTableBodyProps()}>
                        {rows.map((row: any) => {
                          prepareRow(row);
                          return (
                            <tr {...row.getRowProps()}>
                              {row.cells.map((cell: Cell) => {
                                return (
                                  <td
                                    className={`is-${cell.column.id}`}
                                    {...cell.getCellProps()}
                                  >
                                    {cell.render("Cell")}
                                  </td>
                                );
                              })}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          );
        })}
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
        table {
          font-family: "SpaceMono";
          border-spacing: 50px 30px;
        }
        td {
          font-size 20px;
        }
        td.is-icon {
          font-size: 40px;
        }
        th {
          font-size: 26px;
          border-bottom: 3px solid #000000;
        }
        thead {
          border-bottom: 1px solid #000000;
        }
      `}</style>
    </>
  );
}
