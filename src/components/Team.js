import React from "react";

import Stan from "../img/stan.jpeg";
import Martin from "../img/martin.jpg";
import Darwin from "../img/Darwin.png";
import LinkedIn from "../img/linkedIn.png";
import GitHub from "../img/GitHub.png";

function Team() {
  return (
    <div className="wholeComponent">
      <a id="theTeam">
        <div className="wholeTeam">
          <h2 className="meetTheTeam">Meet The Team</h2>
          <div className="individuals">
            <div className="personWrapper">
              <div className="person">
                <h2>Martin</h2>
                <h2>Chiang</h2>
              </div>

              <img src={Martin} alt="" className="teamPic" />
              <div className="githubWhole">
                <img className="LinkedIn" src={LinkedIn} alt="" />
                <h4>
                  <a
                    className="testingColor"
                    href="https://www.linkedin.com/in/mengting-chiang/"
                  >
                    LinkedIn
                  </a>
                </h4>
              </div>
              <div className="githubWhole">
                <img className="github" src={GitHub} alt="" />
                <h4>
                  <a className="testingColor" href="https://github.com/dindean">
                    Github
                  </a>
                </h4>
              </div>
            </div>
            <div className="personWrapper">
              <div className="person">
                <h2>Stanley</h2>
                <h2>Huang</h2>
              </div>

              <img src={Stan} alt="" className="teamPic" />
              <div className="githubWhole">
                <img className="LinkedIn" src={LinkedIn} alt="" />
                <h4>
                  <a
                    className="testingColor"
                    href="https://www.linkedin.com/in/huang-stanley/"
                  >
                    LinkedIn
                  </a>
                </h4>
              </div>
              <div className="githubWhole">
                <img className="github" src={GitHub} alt="" />
                <h4>
                  <a
                    className="testingColor"
                    href="https://github.com/stanpython"
                  >
                    Github
                  </a>
                </h4>
              </div>
            </div>
            <div className="personWrapper">
              <div className="person">
                <h2>Darwin</h2>
                <h2>Sinchi</h2>
              </div>

              <img src={Darwin} alt="" className="teamPic" />
              <div className="githubWhole">
                <img className="LinkedIn" src={LinkedIn} alt="" />
                <h4>
                  <a
                    className="testingColor"
                    href="https://www.linkedin.com/in/darwin-m-sinchi/"
                  >
                    LinkedIn
                  </a>
                </h4>
              </div>
              <div className="githubWhole">
                <img className="github" src={GitHub} alt="" />
                <h4>
                  <a
                    className="testingColor"
                    href="https://github.com/darwinsinchi"
                  >
                    Github
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Team;
