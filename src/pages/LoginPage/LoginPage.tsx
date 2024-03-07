import React, { useState } from "react";
import LoginInputs from "../../components/LoginInputs/LoginInputs";
import LoginButton from "../../components/LoginButton/LoginButton";

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeMail = (e: any) => {
    setEmail(e.target.value);
  }

  const handleChangePassword = (e: any) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email: ", email, "\n Password: ", password)
  }

  return (
    <div className="scope flex justify-center items-center min-h-screen bg-blue-100">
      <div className="login-container flex flex-col justify-center items-center border rounded-lg p-5 w-1/3 space-y-4 bg-white">
        <form action="" className="w-11/12 flex flex-col gap-4" onSubmit={handleSubmit}>
          <h2 className="text-2xl text-center text-indigo-500">Login</h2>
          <LoginInputs type="email" placeholder="Email" value={email} onChange={handleChangeMail}/>
          <LoginInputs type="password" placeholder="Password" value={password} onChange={handleChangePassword}/>
          <LoginButton value="Login"/>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
