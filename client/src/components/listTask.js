import { React, useState, useEffect } from "react";
import axios from "axios";

const ListTask = () => {
  const [allTask, setAllTask] = useState([]);

  useEffect(() => {
    axios
      .get( "/task")
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(res.statusText);
        }
        return res.data;
      })
      .then((data) => {
        console.log("this is fetch---->" + data[0].name);
        setAllTask(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

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
