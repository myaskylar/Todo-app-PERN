import { React, useState, useEffect } from "react";


const ListTask = () => {
  const [allTask, setAllTask] = useState([]);

  async function getTask() {
    const res = await fetch("/task");

    const taskArray = await res.json();

    setAllTask(taskArray)
  }

  useEffect(() => {
    getTask();
  }, []);

console.log("this is allTask------------->" + allTask);
  return (
    <div>
      <h1> Task List </h1>
      <ul>
        {allTask.map((task, index)=> {
         return <li key={index}>{task.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListTask;
