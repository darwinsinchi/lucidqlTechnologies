import React from "react";
import Navbar from "./components/navbar";
import FirstBody from "./components/firstbody";
import "./App.css";
import Secondbody from "./components/secondbody";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="wholeBodyPart">
        <FirstBody></FirstBody>
        <Secondbody></Secondbody>
        <Team></Team>
      </div>
    </div>
  );
}

export default App;
