import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function TaskCreate() {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(null);
    const [important, setImportant] = useState(false);

    const submitNewTask = () => {
        axios.post("api/tasks/add", {title: title, description: description, deadline: deadline, important: important})
            .then(()=> {navigate("/")}, (e)=>{alert(e.message)});
    }

    return (
        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 h-fit p-4 rounded-lg shadow-lg m-auto bg-gray-100 text-gray-600 transition duration-75">
            <h1 className="text-center uppercase border-b-4 border-red-200 text-xl font-bold">New Task</h1>
            <form className="mx-2 mt-2 text-lg justify-center items-center" onSubmit={()=>{submitNewTask(); return false;}}>
                <div className="flex flex-col w-full my-2">
                    <label htmlFor="title">Title : </label>
                    <input id="title" type="text" onChange={(e)=>setTitle(e.target.value)} required className="px-2 mb-3 border-b border-gray-500 bg-gray-100 focus:outline-none"/>
                    <label htmlFor="description">Description : </label>
                    <textarea id="description" onChange={(e)=>setDescription(e.target.value)} required className="px-2 mb-3 border border-gray-500 bg-gray-100 focus:outline-none" rows="4"/>
                    <label htmlFor="deadline">Deadline : </label>
                    <input id="deadline" type="date" onChange={(e)=>setDeadline(e.target.value)} required className="px-2 mb-3 border border-gray-500 bg-gray-100 focus:outline-none"/>
                    <div className="flex flex-row justify-center items-center mb-2">
                        <label htmlFor="important" className="mr-2">Important?</label>
                        <input id="important" type="checkbox" onChange={(e)=>setImportant(e.target.checked)} />
                    </div>
                    <div className="flex flex-row justify-center items-center mt-4">
                        <NavLink to="/" className="btn warning mx-2 uppercase">Cancel</NavLink>
                        <button type="submit" className="btn safe mx-2 uppercase">Add Task</button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TaskCreate;