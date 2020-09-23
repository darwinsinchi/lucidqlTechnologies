import React from "react";
import lucidQLlogo from "../img/lucidQLlogo.png";
import lucidQLwords from "../img/lucidQLwords.png";

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <img className="lucidQLlogo" src={lucidQLlogo} alt="" />
        <img className="lucidQLwords" src={lucidQLwords} alt="" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="http://www.lucidql.com/">
                | Try lucidQL
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testing">
                | Test
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#theTeam">
                | The Team
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/oslabs-beta/LucidQL">
                | View Source Code
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
