import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Prm from "./promisecode";
import Asaw from "./asawcode";
import Ani from "./animation";

function App() {
  return (
    <>
      <Ani />
      {/* <Asaw /> */}
      {/* <Prm /> */}
    </>
  );
}

export default App;
