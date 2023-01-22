import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Header.css";
import Menubar from "./Menubar";
import Icons from "./Icons";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="logo">yekao</div>
        <Menubar />
        <Icons />
      </div>
    </div>
  );
}

export default App;
