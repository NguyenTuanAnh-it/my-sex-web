import React from "react";
import ReactDOM from "react-dom/client";
import Login from './Login/Login';
import SignUp from "./SignUp/SignUp";
import Accept from "./AcceptSignUp/AcceptSignUp";

const root = ReactDOM.createRoot(document.getElementById("root") );
root.render(
  <React.StrictMode>
    {/* import màn trong đây */}
    <SignUp/>
    {/* <Login/> */}
    {/* <Accept/> */}
  </React.StrictMode>
);
