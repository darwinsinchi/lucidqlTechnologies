import React from "react";
import logoPicture from "../img/lucidQL.png";

function FirstBody() {
  return (
    <div>
      <div className="firstBody">
        <div className="column">
          <h1 className="maintitle">
            Build a fast, responsive, GraphQL API with lucidQL
          </h1>
          <h4 className="text">
            Quickly design GraphQL APIs from existing RESTful APIs that use an
            existing Postgres database.{" "}
          </h4>
          <form action="http://www.lucidql.com/">
            <input className="gotolucid" type="submit" value="Try It Now" />
          </form>
        </div>

        <img className="logopicture" src={logoPicture} alt="picture"></img>
      </div>
    </div>
  );
}

export default FirstBody;
