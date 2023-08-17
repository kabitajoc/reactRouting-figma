import { useState } from "react";

import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./components/login/Login";
import { useSelector } from "react-redux";
import { selectUser } from "./redux-login/userSlice";

function App() {
  // const [count, setCount] = useState(0);
  const user = useSelector(selectUser);

  return (
    <>
      <div>
        {/* <Login /> */}
        {/* <HomePage /> */}
        {user ? <HomePage /> : <Login />}
      </div>
    </>
  );
}

export default App;
