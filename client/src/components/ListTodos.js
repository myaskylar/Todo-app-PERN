import React, { Fragment, useState, useEffect } from "react";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);

  async function getTodos() {

    const res = await fetch("/todos");
    const todoArray = await res.json();

    setTodos(todoArray);
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5">
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
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
