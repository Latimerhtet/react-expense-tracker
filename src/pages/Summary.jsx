import React from "react";
import { useGetTransactions } from "../hooks/useGetTransactions";
const Summary = () => {
  const { transactions } = useGetTransactions();
  const { transactionTotal } = useGetTransactions();
  return (
    <section className="text-white h-full flex flex-col gap-4">
      <h2 className="text-2xl">Summary of Your montery details</h2>
      <div className="flex gap-3">
        <div className="p-3 border-2 rounded-sm">
          <p>Income </p>
          <span>$ {transactionTotal.income}</span>
        </div>
        <div className="p-3 border-2 rounded-sm">
          <p>Expenses </p>
          <span>$ {transactionTotal.expense}</span>
        </div>
        <div className="p-3 border-2 rounded-sm">
          <p>Balance </p>
          {transactionTotal.balance >= 0 ? (
            <span>$ {transactionTotal.balance}</span>
          ) : (
            <span>- $ {transactionTotal.balance * -1}</span>
          )}
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr className="flex gap-10 text-left">
              <th className="w-80 ">Description</th>
              <th className="w-16">Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {!transactions ? (
              <p>Loading...</p>
            ) : (
              transactions.map((transaction, index) => {
                const { description, transactionAmount, transactionType } =
                  transaction;
                return (
                  <tr className="flex gap-10" key={index}>
                    <td className="w-80">{description}</td>
                    <td className="w-16">{transactionType}</td>
                    <td>$ {transactionAmount}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Summary;
