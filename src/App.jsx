import React, { useState, useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const storedEmail = localStorage.getItem("email");
  //   const storedPassword = localStorage.getItem("password");
  //   if (storedEmail === "john@gmail.com" && storedPassword === "changeme") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // if (setIsLoggedIn(true)) {
  //   Navigate("/home");
  // }
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
