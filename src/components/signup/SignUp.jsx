import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./SignUp.css";
import { signupUser } from "../../redux-login/rreducers/userSlice";
function SignUp() {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
  });
  console.log(signupData);
  const dispatch = useDispatch();
  const countries = ["United States", "United Kingdom", "Canada", "Nepal"];
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSignupData((prevsignupData) => ({
      ...prevsignupData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(signupData));

    localStorage.setItem("signupData", JSON.stringify(signupData));
    // setSignupData({
    //   fullname: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    //   country: "",
    // });
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h2>Signup here</h2>
      <div className="fullname">
        <label htmlFor="fullname">Fullname</label>
        <br />
        <br />
        <input
          type="text"
          placeholder="Fullname"
          name="fullname"
          value={signupData.fullname}
          onChange={handleChange}
        />
      </div>
      <div className="email">
        <label htmlFor="email">Email</label>
        <br />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={signupData.email}
          onChange={handleChange}
        />
      </div>
      <div className="password">
        <label htmlFor="password">Password</label>
        <br />
        <br />
        <input
          type="password"
          placeholder="******"
          name="password"
          value={signupData.password}
          onChange={handleChange}
        />
      </div>
      <div className="confirmPassword">
        <label htmlFor="password">Confirm Password</label>
        <br />
        <br />
        <input
          type="password"
          placeholder="******"
          name="confirmPassword"
          value={signupData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <div className="country">
        <label htmlFor="country">Country</label>
        <br />
        <br />
        <select
          className="select-country"
          name="country"
          value={signupData.country}
          onChange={handleChange}
        >
          <option value="">Select your country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <br />
        <br />
      </div>
      <button>Signup</button>
    </form>
  );
}

export default SignUp;
