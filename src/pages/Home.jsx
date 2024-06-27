import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex">
      <AdminNavbar />
      <div className="bg-gray-700 basis-9/12 h-screen flex justify-start p-5 ">
        <Outlet />
      </div>
    </section>
  );
};

export default Home;
