import React from "react";
import Navbar from "./components/navbar";
import FirsrBody from "./components/firstbody";
import "./App.css";
import Secondbody from "./components/secondbody";
import Team from "./components/Team";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <FirsrBody></FirsrBody>
      <Secondbody></Secondbody>
      <Team></Team>
    </div>
  );
}

export default App;
