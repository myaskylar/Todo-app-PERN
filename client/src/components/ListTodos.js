import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import DelTodos from "./DelTodos";
import EditTodos from "./EditTodos";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios
      .get("/todos")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.name}</td>
              <td><EditTodos /></td>
              <td><DelTodos id={todo.todo_id} setTodos={setTodos} todos={todos} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
