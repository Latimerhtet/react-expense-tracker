import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const main = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Outlet />
    </div>
  );
};

export default main;
