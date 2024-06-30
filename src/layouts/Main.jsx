import React from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const main = () => {
  // const { isAuth } = useGetUserInfo();
  // if (isAuth) {
  //   return <Navigate to={"/admin"} />;
  // }
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default main;
