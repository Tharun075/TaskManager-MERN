const express = require('express')
const { getAllTasks, createTask, deleteTask, updateTask } = require('../Controllers/taskController')

const TaskRouter = express.Router()

TaskRouter.get("/getAll",getAllTasks)
TaskRouter.post("/createTask", createTask)
TaskRouter.delete("/deleteTask/:id", deleteTask)
TaskRouter.put("/updateTask/:id", updateTask)

module.exports = TaskRouter