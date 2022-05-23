import React, { useState, Fragment } from "react";
import axios from "axios";

const EditTodos = ({ todo }) => {
  const [taskEdited, setTaskEdited] = useState({ name: "" });

  const handleEdit = (e) => {
    e.preventDefault();
    const key = e.target.getAttribute("name");
    setTaskEdited({ ...taskEdited, [key]: e.target.value });
  };

  const editTask = async (taskId, obj) => {
    await axios
      .put(`/todos/${taskId}`, obj)
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        window.location = "/";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Todo</h4>
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                name="name"
                className="form-control"
                value={taskEdited.name}
                onChange={handleEdit}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={() => editTask(todo.todo_id, taskEdited)}
              >
                Edit
              </button>
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodos;
