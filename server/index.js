const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes
//creating a task
app.post("/task", async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = await pool.query("insert into todo (name) values ($1) returning *",[name]);
    res.json(newTask);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("port listing to localhost 5000");
});
