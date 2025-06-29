import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "../Components/navbar"
import { TaskList } from "./taskList"
import { AddTask } from "./addTask"

export const TaskApp=()=>{
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<TaskList/>}/>
                    <Route path="/add-task" element={<AddTask/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}