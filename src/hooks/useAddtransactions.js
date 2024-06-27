import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { useGetUserInfo } from "./useGetUserInfo";
export const useAddtransactions = () => {
  const transactionsCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransactions = async ({
    description,
    transactionAmount,
    transactionType,
  }) => {
    await addDoc(transactionsCollectionRef, {
      userId,
      description,
      transactionAmount,
      transactionType,
      createdAt: serverTimestamp(),
    });
  };

  return { addTransactions };
};
