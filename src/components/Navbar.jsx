import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config/firebaseConfig";
import { redirect, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const userInfo = {
      userId: result.user.uid,
      useName: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    navigate("/admin");
  };
  return (
    <nav className="flex justify-between p-5 px-10">
      <p className="text-2xl font-bold uppercase">Expenses</p>
      <div>
        <button
          className="p-2 px-3 bg-cyan-800 text-white rounded-md"
          onClick={signInWithGoogle}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
