import { useEffect, useState } from "react"

export const TaskList=()=>{
    const [tasks, setTasks] = useState([])

    async function fetchTasks(){
        try{
            const response = await fetch("https://projects-98l0.onrender.com/")
            const data = await response.json()
            setTasks(data)
        }
        catch(err){
            console.error("FE:=> Error fetching data:",err)
        }
    }

    useEffect(()=>{
        fetchTasks()
    },[tasks])
    return(
        <>
            <ul>
                {
                    tasks.length>0 && tasks.map((el,id)=>(
                        <li key={id}>
                            <div>
                                <h3>{el.title}</h3>
                                <p>{el.completed}</p>
                                <p>{el.createdAt}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}