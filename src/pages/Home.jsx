import React, { useEffect } from "react";
import AdminNavbar from "../components/AdminNavbar";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../hooks/useGetUserInfo";

const Home = () => {
  const { isAuth } = useGetUserInfo();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

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
