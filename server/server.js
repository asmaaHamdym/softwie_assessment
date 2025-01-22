const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const app = new express();

app.use(express.json());
// In-memory data store (for simplicity)
let tasks = [
  { id: 1, title: "Learn Node.js", completed: false },
  { id: 2, title: "Write RESTful API", completed: false },
];

// Route to retrieve all tasks
app.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

// Route to submit a new task
app.post("/tasks", (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Task title is required." });
  }
  const newTask = { id: tasks.length + 1, title, completed };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Route to update an existing task
app.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id, 10);
  const { title, completed } = req.body;
  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found." });
  }

  if (title !== undefined) tasks[taskIndex].title = title;
  if (completed !== undefined) tasks[taskIndex].completed = completed;

  res.status(200).json(tasks[taskIndex]);
});

// database connection
mongoose
  .connect(`${process.env.DATABASE_CONNECTION_STRING}`)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running Here: http://localhost:3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
