import React from "react";
import { useGetTransactions } from "../hooks/useGetTransactions";
const Summary = () => {
  const { transactions } = useGetTransactions();
  const { transactionTotal } = useGetTransactions();
  return (
    <section className="text-white h-full ">
      <h2 className="text-2xl mb-7">Summary of Your montery details</h2>
      <div className="flex gap-3 mb-8">
        <div className="p-3  w-[150px] text-center mr-5 bg-slate-400 text-black cursor-pointer rounded-md ">
          <p>Income </p>
          <span>$ {transactionTotal.income}</span>
        </div>
        <div className="p-3   w-[150px] text-center mr-5 bg-red-700 cursor-pointer rounded-md">
          <p>Expenses </p>
          <span>$ {transactionTotal.expense}</span>
        </div>
        <div className="p-3 bg-white text-black  w-[150px] text-center cursor-pointer rounded-md">
          <p>Balance </p>
          {transactionTotal.balance >= 0 ? (
            <span>$ {transactionTotal.balance}</span>
          ) : (
            <span>- $ {transactionTotal.balance * -1}</span>
          )}
        </div>
      </div>
      <h2 className="mb-3 text-xl font-bold">Your Transaction History</h2>
      <div className="w-full ">
        <table>
          <thead>
            <tr className="flex gap-10 text-left px-8 py-1 bg-white text-cyan-800  rounded-md">
              <th className="w-80 ">Description</th>
              <th className="w-16">Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <div className="h-[400px] overflow-y-auto mt-5 p-1">
              {!transactions ? (
                <p>Loading...</p>
              ) : (
                transactions.map((transaction, index) => {
                  const { description, transactionAmount, transactionType } =
                    transaction;
                  return (
                    <>
                      {transaction ? (
                        <tr
                          className="flex gap-10 bg-indigo-500 mt-4 px-8 py-2 rounded-md "
                          key={index}
                        >
                          <td className="w-80">{description}</td>
                          {transactionType == "income" ? (
                            <td
                              className={"w-16 text-green-400 font-extrabold"}
                            >
                              {transactionType}
                            </td>
                          ) : (
                            <td className={" text-orange-400 font-extrabold"}>
                              {transactionType}
                            </td>
                          )}
                          <td>$ {transactionAmount}</td>
                        </tr>
                      ) : (
                        <tr>There is no transaction yet!</tr>
                      )}
                    </>
                  );
                })
              )}
            </div>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Summary;
