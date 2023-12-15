import React, { useState, useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Nav />
      <Outlet />

      <Footer />
    </div>
  );
}

export default App;
