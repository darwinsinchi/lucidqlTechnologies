import React from "react";

function Secondbody() {
  return (
    <div className="secondBody">
      <div className="firstBody">
        <div className="column">
          <h1 className="howto">How does lucidQL work?</h1>
          <h4 className="text">
            First choose your desired Postgres database that you want to use to
            create a graphQL API, and enter the link where prompted, and click
            submit. lucidQL will immediately start by reading your database,
            extracting all the tables, and their relationships, and generate a
            GraphQL schema. A visual representation will display on the left
            side of the tool, users can analyze their current database and their
            table relationships.
          </h4>
          <h4 className="text">
            The lucidQL tool allows the user to simplify their schema by being
            able to delete any relationships that they no longer require.
            <ul className="bulletpoints">
              <li>
                If any tables are undesired in the final product, simply drag a
                table to the garbage icon, lucidQL will handle the rest.
              </li>
              <li>
                The GraphQL schemas will be regenerated accordingly to your
                changes.
              </li>
              <li>if you make a mistake, simply click the "undo" button.</li>
            </ul>
          </h4>
        </div>

        <img
          className="gif1"
          src="https://media.giphy.com/media/b5tiBskK6AbXLjEiWP/giphy.gif"
          alt="readmeDemo"
        ></img>
      </div>

      <div className="firstBody">
        <div className="column">
          <a id="testing">
            <h1 className="howto">
              How to Test Your Schema, Resolvers and Mutations
            </h1>
          </a>
          <h3 className="optionA">Option A:</h3>
          <h4 className="text">
            The lucidQL tool comes pre-packaged with a backend, which enables
            the user to access GraphQL playground and start querying your new
            API, immediately. After entering a Postgres URI. The user will just
            have to click on "GraphQL PLayground" which can be accessed through
            the side menu bar.
          </h4>
        </div>

        <img
          className="gif2"
          src="https://media.giphy.com/media/HhVpUqlOj2T4Bwme8K/giphy.gif"
          alt="readmeDemo"
        ></img>
      </div>

      <div className="firstBodyV2">
        <div className="column">
          <h3 className="optionB">Option B:</h3>
          <h4 className="text">Download Files</h4>
          <h4 className="text">Unzip package</h4>
          <h4 className="text">Open directory</h4>
          <h4 className="text">Install dependencies with "npm install" </h4>
          <h4 className="text">Run the application with "npm start"</h4>
        </div>
        <code className="npmbox">
          <h2 className="npm"> npm run build</h2>
          <h2 className="npm"> npm start</h2>
        </code>
      </div>
    </div>
  );
}

export default Secondbody;
