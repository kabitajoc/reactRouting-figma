import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import { storeConfigure } from "./redux-login/store";
// import { configureStore } from "@reduxjs/toolkit";
import store from "./redux-login/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
