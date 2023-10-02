import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();
  const loginEmail = localStorage.getItem("email");
  const loginPassword = localStorage.getItem("password");
  useEffect(() => {
    if(!loginEmail && !loginPassword){
      navigate("/login")
    }
  },[loginEmail,loginPassword,navigate]);
  return <div>{children}</div>;
};

export default ProtectedRoutes;
