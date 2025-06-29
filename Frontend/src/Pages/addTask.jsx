import { useState } from "react"
import "../styles/addTask.css"

export const AddTask=()=>{
    const [title,setTitle] = useState("")
    const [completed,setCompleted] = useState(false)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    async function handleSubmit(e){
        e.preventDefault()

        if(!title.trim()){
            alert("Enter title")
            return
        }
        setLoading(true)
        setError(null)

        try{
            const response = await fetch("https://projects-98l0.onrender.com/createTask", {
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    completed,
                })
            })

            if(!response.ok){
                console.log("Error creating task")
            }
            setTitle("")
            setCompleted(false)
            alert("Task added successfully!")
        }
        catch(error){
            console.error("Error creating task", error)
        }
        finally{
            setLoading(false)
        }
    }
    return(
        <>
           <div>
             <form onSubmit={handleSubmit}>
                <label htmlFor="task-title">Task Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={completed}
                            onChange={() => setCompleted(!completed)}
                        />
                        Mark as completed
                    </label>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Task"}
                </button>

            </form>
             {error && <p className="error">{error}</p>}
           </div>
        </>
    )
}