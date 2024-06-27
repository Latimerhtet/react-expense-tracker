import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { useGetUserInfo } from "./useGetUserInfo";

export const useGetTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionTotal, setTransactionTotal] = useState({
    income: 0,
    expense: 0,
    balance: 0,
  });
  const { userId } = useGetUserInfo();
  const transactionsCollectionRef = collection(db, "transactions");
  const getTransactions = async () => {
    let unsubscribe;
    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;
    try {
      const queryTransactions = query(
        transactionsCollectionRef,
        where("userId", "==", userId),
        orderBy("createdAt")
      );

      unsubscribe = onSnapshot(queryTransactions, (snapshot) => {
        let docs = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          const id = doc.id;
          docs.push({ ...data, id });
          if (data.transactionType === "expense") {
            totalExpense += Number(data.transactionAmount);
          } else {
            totalIncome += Number(data.transactionAmount);
          }
          totalBalance = totalIncome - totalExpense;
        });
        setTransactions(docs);
        setTransactionTotal({
          balance: totalBalance,
          expense: totalExpense,
          income: totalIncome,
        });
      });
    } catch (e) {
      console.error(e);
    }
    return () => unsubscribe();
  };
  useEffect(() => {
    getTransactions();
  }, []);
  return { transactions, transactionTotal };
};
