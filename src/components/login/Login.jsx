import React, { useState } from "react";
import "./Login.css";
// import { Link } from "react-router-dom";
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

    // const handleInput = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;

    //     setInput((Input) => ({ ...Input, [name]: value }));
    //   };
  };
  const handleError = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "password") {
      if (value.length < 10) {
        // || value.length > 10
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Password should be of 10 characters",
        }));
      } else if (value.includes("_")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "You cannot use an underscore",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    }

    if (name === "email") {
      if (!value.includes("@")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [name]: "Email must contain '@'",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    dispatch(
      signin({
        email: formData.email,
        password: formData.password,
        signedIn: true,
      })
    );
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Login form</h2>
        <div className="email">
          <label htmlFor="email">Email</label>
          <br></br>
          <input
            type="text"
            name="email"
            placeholder=" Enter email"
            value={formData.email}
            onBlur={handleError}
            onChange={handleChange}
          />
          <p className="error">{errors.email}</p>
        </div>
        <br />
        <div
          className="password
        "
        >
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            placeholder="********"
            name="password"
            value={formData.password}
            onBlur={handleError}
            onChange={handleChange}
          />
          <p className="error">{errors.password}</p>
        </div>

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

export default Login;
