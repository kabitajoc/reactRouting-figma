import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { signin } from "../../redux-login/userSlice";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signin({ email: formData.email, password: formData.password }));
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Login form</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
        </div>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

export default Login;
