import React, { useState } from "react";
import { NavLink, redirect, useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useGetUserInfo } from "../hooks/useGetUserInfo";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";
const AdminNavbar = () => {
  const user = JSON.parse(localStorage.getItem("userInfo"));
  const { profilePhoto, useName } = useGetUserInfo();
  console.log(user.profilePhoto);
  const navigate = useNavigate();
  const signOutAccount = async () => {
    const status = window.confirm("Are you sure to log out?");
    if (status) {
      try {
        await signOut(auth);
        localStorage.clear();
        navigate("/");
      } catch (e) {
        console.error(e);
      }
    }
  };
  return (
    <nav className="basis-3/12 h-screen flex flex-col items-center gap-6 p-5  ">
      <div>
        {profilePhoto ? (
          <img
            className="w-24 rounded-full border-2 p-1 border-cyan-800 cursor-pointer"
            src={profilePhoto}
            alt="user"
          />
        ) : (
          <img
            className="w-24 rounded-full border-2 p-1 border-cyan-800 cursor-pointer"
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s"
            }
            alt="user"
          />
        )}
      </div>
      <div>
        <p className="font-bold">{useName}</p>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <NavLink to={"/admin"} className="">
          Overview
        </NavLink>
        <NavLink to={"/admin/addExpense"} className="flex gap-1 items-center">
          <IoIosAddCircleOutline />
          <span>Add Expense</span>
        </NavLink>
      </div>
      <div>
        <button
          className="p-2 bg-red-800 rounded-lg text-white hover:shadow-xl"
          onClick={signOutAccount}
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
