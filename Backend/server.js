const express = require("express")
const connectToDB = require("./mongoDB/mongoConnect")
const TaskRouter = require("./Routes/taskRoutes")
require('dotenv').config()
const PORT = process.env.PORT
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())
//Tests
app.get("/test",(req,res)=>{
    res.status(200).json({msg:"TEST ROUTE!"})
})

//Routes-Static
app.use("/",TaskRouter)

app.listen(PORT, ()=>{
    connectToDB()
    console.log(`Server Running on: http://localhost:${PORT}`)
})