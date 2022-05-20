const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path = require("path");
const PORT = process.env.PORT || 5000;

//process.env.PORT
//process.env.NODE_ENV => production or undefined

//middleware
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client/build")));

if(process.env.NODE_ENV === "production"){
  //server static content
app.use(express.static(path.join(__dirname,"client/build")))
}

//routes
//creating a task
app.post("/task", async (req, res) => {
  try {
    const { name } = req.body;
    const newTask = await pool.query(
      "insert into todo (name) values ($1) returning *",
      [name]
    );
    res.json(newTask.rows);
  } catch (err) {
    console.log(err);
  }
});

//getting all task
app.get("/task", async (req, res) => {
  try {
    const allTask = await pool.query("select * from todo");
    res.json(allTask.rows);
  } catch (err) {
    console.log(err.massage);
  }
});

//getting a task
app.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("select * from todo where todo_id = $1",[id]);
    res.json(task.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//update a task
app.put("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name} = req.body;
    const task = await pool.query("update todo set name = $1 where todo_id = $2",[name,id]);
    res.json("task updated successfully");
  } catch (err) {
    console.log(err);
  }
});

//delete a task
app.delete("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("delete from todo where todo_id = $1",[id]);
    res.json("task deleted successfully");
  } catch (err) {
    console.log(err);
  }
});

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})

app.listen(PORT, () => {
  console.log(`port listing to localhost ${PORT}`);
});
