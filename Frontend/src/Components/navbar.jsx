import { Link, BrowserRouter, Routes, Route} from 'react-router-dom'

export const Navbar=()=>{
    return(
        <>
            <nav className='navbar'>
                <Link className='navItem' to="/"><h1>Task Manager</h1></Link>
                <Link className='navItem' to="/">Task List</Link>
                <Link className='navItem' to="/add-task">Add Task</Link>
            </nav>
        </>
    )
}