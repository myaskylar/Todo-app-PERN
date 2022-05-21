import React from "react";
import ListTodos from "./components/ListTodos";
import AddTodos from "./components/AddTodos";

const Home = () => {
  return (
    <main>
      <div>
        <AddTodos />
      </div>
      <div>
        <ListTodos />
      </div>
    </main>
  );
};

export default Home;
