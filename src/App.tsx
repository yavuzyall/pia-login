import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import PageTitle from "./components/PageTitle/PageTitle";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {

  const [pageTitle, setPageTitle] = React.useState("Title from state");
  console.log(pageTitle);
  let title = "Title from variable";

  return (
    <>
      <LoginPage/>
    </>
  );
}

export default App;
