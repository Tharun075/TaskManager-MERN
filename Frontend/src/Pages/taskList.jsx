import { useEffect, useState } from "react"
import "../styles/taskList.css"
export const TaskList=()=>{
    const [tasks, setTasks] = useState([])

    async function fetchTasks(){
        try{
            const response = await fetch("https://projects-98l0.onrender.com/getAll")
            const result = await response.json()
            console.log(result.data)
            setTasks(result.data)
        }
        catch(err){
            console.error("FE:=> Error fetching data:",err)
        }
    }

    useEffect(()=>{
        fetchTasks()
    },[])


    async function deleteTask(id){
        try{
            const response = await fetch(`https://projects-98l0.onrender.com/deleteTask/${id}`,{
                method: "DELETE",
            })

            if(!response.ok){
                console.log("Failed to delete Task")
            }
            setTasks((prevTasks)=>prevTasks.filter((task)=> task._id !== id))
            console.log(`Task deleted: ${id}`)
        }
        catch(error){
            console.error("Error deleting task",error)
        }
    }

    async function completeTask(task){
        try{
            const response = await fetch(`https://projects-98l0.onrender.com/updateTask/${task._id}`,{
                method: "PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({title:task.title,completed: true})
            })

            if(!response.ok){
                console.log("Error updating task!")
            }
            setTasks((prevTasks) =>
                prevTasks.map((t) =>
                    t._id === task._id ? { ...t, completed: true } : t
                )
            );
            console.log(`Task updated: ${task._id}`);
        }
        catch(error){
            console.error("Error updating task", error);
        }
    }
    return(
        <>
            <ul>
                {
                    tasks.length>0 && tasks.map((el,id)=>(
                        <li key={id}>
                            <div className="card">
                                <p>TaskID: {el._id}</p>
                                <p>Title: <b>{el.title}</b></p>
                                <p> Status: <b>{el.completed ? "Completed" : "Pending"}</b></p>
                                <p> Date Created: <b>{el.createdAt}</b></p>
                                <button className="comp" onClick={()=>completeTask(el)}>{el.completed? "Completed!" : "Mark as Complete"}</button>
                                <button className="del" onClick={()=>deleteTask(el._id)}>Delete</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}