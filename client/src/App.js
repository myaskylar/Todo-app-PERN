import { Route, Routes } from "react-router-dom";
import React from "react";
import ListTodos from "./components/ListTodos";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<ListTodos />} />
      </Routes>
    </div>
  );
};

export default App;
