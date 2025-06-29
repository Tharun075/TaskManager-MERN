const express = require('express')
const { getAllTasks, createTask, deleteTask, updateTask } = require('../Controllers/taskController')

const TaskRouter = express.Router()

TaskRouter.get("/",getAllTasks)
TaskRouter.post("/", createTask)
TaskRouter.delete("/:id", deleteTask)
TaskRouter.put("/:id", updateTask)

module.exports = TaskRouter