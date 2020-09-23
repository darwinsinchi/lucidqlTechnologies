import React from "react";

function Secondbody() {
  return (
    <div className="secondBody">
      <div className="firstBody">
        <div className="column">
          <h1 className="howto">How to use lucidQL</h1>
          <h4 className="text">
            First select an existing Postgres URI that you want to use to create
            a graphQL schema and paste that link into lucidQL and send it.
            lucidQL will create a schema and provide you with the required files
            to setup your back end with GraphQL, which includes a server file, a
            connection file, and a schema file. lucidQL also allows the user to
            simplify their schema by being able to delete any relationships they
            no longer require by dragging a relationship into the garbage
            container. The user can also undo a deletion.
          </h4>
          <h4 className="text">
            The connection file connects your Postgres API to your server. The
            server file sets up your server and includes playground so that you
            can query the information from your API as needed. Lastly, your
            schema file will provide you with queries, mutations, and resolvers
            based on your Postgres URI.{" "}
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
            lucidQL also provides access to playgound to query an existing
            database. The user will just have to click on "GraphQL PLayground"
            which is found on the top left side of the page within the Navbar
            Icon. After clicking this button, the user will be redirected to
            playground.
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
          <h4 className="text">
            After the application is running, enter localhost:3000/playground in
            your browser and you can start querying your database
          </h4>
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
