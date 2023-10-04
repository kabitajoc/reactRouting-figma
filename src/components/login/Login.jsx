import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import an icon from Font Awesome
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Import eye icons

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false); // State for password visibility

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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "john@gmail.com" &&
      formData.password === "changeme"
    ) {
      localStorage.setItem("email", formData.email);
      localStorage.setItem("password", formData.password);

      navigate("/");
    } else {
      setEmailError("Enter the correct email");
      setPasswordError("Check your password again");
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-600 text-white max-w-md p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl mb-6">Login Form</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleEmail}
            onBlur={handleEmailBlur}
            className="w-full px-3 py-2 text-slate-800 rounded-md outline-none bg-slate-300"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handlePassword}
              onBlur={handlePasswordBlur}
              className="w-full px-3 py-2 text-slate-800 rounded-md outline-none bg-slate-300"
            />
            <span
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon
                icon={passwordVisible ? faEyeSlash : faEye}
                color="gray"
              />
            </span>
          </div>
          {passwordError && (
            <p className="text-red-500 text-sm mt-1">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-slate-500 flex items-center justify-center text-white  px-4 rounded-md w-full hover:bg-slate-700"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;
