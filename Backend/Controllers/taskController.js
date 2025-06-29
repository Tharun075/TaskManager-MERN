const TaskModel = require("../Models/taskModel")

const getAllTasks = async(req,res)=>{
    try{
        const data = await TaskModel.find()
        res.status(200).json({data})
    }
    catch(error){
        res.status(500).json({msg:"Fetch all tasks failed"})
    }
}

const createTask = async(req,res)=>{
    const {title} = req.body
    if(!title){
        return res.status(401).json({msg:"Missing required Parameters"})
    }

    try{
        const newTask = new TaskModel({
            title:title,
        })

        await newTask.save()
        res.status(201).json({msg:"task created",newTask})
    }
    catch(error){
        res.status(401).json({msg:"Failed to create task",error})
    }
}

const deleteTask = async(req,res)=>{
    const {id} = req.params
    if(!id){
        return res.status(401).json({msg:"Missing required parameters"})
    }

    try{
        const deletedTask = await TaskModel.findByIdAndDelete(id)
        res.status(200).json({msg:"Task deleted",task:deletedTask.id})
    }
    catch(error){
        res.status(404).json({msg:"Task not found"})
    }
}

const updateTask = async(req,res)=>{
    const {id} = req.params
    const {title, completed } = req.body
    if(!id){
        return res.status(401).json({msg:"Missing required parameters"})
    }
    if(!title){
        return res.status(401).json({msg:"Missing required parameters"})
    }
    try{
        const targetTask  = await TaskModel.findById(id)
        targetTask.title=title
        targetTask.completed=completed
        res.status(200).json({msg:"Task updated", targetTask})
    }
    catch(error){
        res.status(404).json({msg:"No task found"})
    }
}

module.exports ={getAllTasks, createTask, deleteTask, updateTask}