import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleEmail = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handlePassword = (e) => {
    setFormData({ ...formData, password: e.target.value });
  };

  const handleEmailBlur = () => {
    if (!formData.email.trim()) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordBlur = () => {
    if (!formData.password.trim()) {
      setPasswordError("Password is required");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "john@gmail.com" &&
      formData.password === "changeme"
    ) {
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);
      // setIsLoggedIn(true);
      navigate("/");
    } else {
      setEmailError("Enter correct email");
      setPasswordError("Check your password again");
      navigate("/login");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login form</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleEmail}
            onBlur={handleEmailBlur}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <br />
        <div className="password">
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onChange={handlePassword}
            onBlur={handlePasswordBlur}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

export default Login;
