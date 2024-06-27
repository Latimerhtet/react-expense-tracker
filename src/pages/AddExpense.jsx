import React, { useState } from "react";
import { useAddtransactions } from "../hooks/useAddtransactions";
import { FaWindowClose } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const AddExpense = () => {
  const navigate = useNavigate();
  const { addTransactions } = useAddtransactions();
  const [description, setDescription] = useState("");
  const [transactionAmount, setAmount] = useState(null);
  const [transactionType, setType] = useState("expense");
  const submitForm = async (e) => {
    e.preventDefault();
    addTransactions({
      description,
      transactionAmount,
      transactionType,
    });
    window.alert("Transaction added successfully!");
    setDescription("");
    setAmount(null);
    navigate("/admin");
  };
  return (
    <>
      <form onSubmit={submitForm} className="text-white flex flex-col gap-10">
        <h3 className="text-2xl">Add a new Expense</h3>
        <div className="flex flex-col gap-6 w-[500px]">
          <input
            className="outline-none text-black p-4 rounded-sm"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="outline-none text-black p-4 rounded-sm"
            type="number"
            placeholder="Amount"
            value={transactionAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="radio"
              id="expense"
              value="expense"
              checked={transactionType == "expense"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="expense">For expense</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="income"
              value="income"
              checked={transactionType == "income"}
              onChange={(e) => setType(e.target.value)}
            />
            <label htmlFor="income">For income</label>
          </div>
        </div>

        <button
          type="submit"
          className="p-2 bg-yellow-800 text-white self-start"
        >
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddExpense;
