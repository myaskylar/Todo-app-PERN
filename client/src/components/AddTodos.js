import React, { useState } from "react";
import axios from "axios";

const AddTodos = () => {
  const [newTodo, setNewTodo] = useState({name:""});

  const handleChange = (event) => {
    event.preventDefault();
    const key = event.target.getAttribute("name");
    setNewTodo({ ...newTodo, [key]: event.target.value });
  };

  const handleSubmit = async (obj) => {
    axios
      .post("/todos", obj)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div>
        <form
          onSubmit={()=>{handleSubmit(newTodo)}}
        >
          <label>
            <input type="text" name="name" value={newTodo.name} onChange={handleChange} />
          </label>
          <button type="submit" value="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodos;
