import React, { Fragment } from "react";
import ListTodos from "./components/ListTodos";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;
