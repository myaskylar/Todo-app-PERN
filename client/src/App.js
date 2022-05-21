import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Home";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
