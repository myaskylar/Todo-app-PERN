import axios from "axios";
import React from "react";

const DelTodos = ({ id, setTodos, todos }) => {

  const deleteTodo = async (todoId) => {
    axios
      .delete(`/todos/${todoId}`)
      .then((res) => {
         if (res.status !== 200) {
           throw new Error(res.statusText);
         }
         console.log("deleted!!!!!!!!!!!!");
         setTodos(todos.filter((todo) => todo.todo_id !== todoId));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <button onClick={()=>deleteTodo(id)}>Delete</button>
    </div>
  );
};

export default DelTodos;
