import { useState, useEffect } from "react";
import { useParams, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

function TaskEdit() {
    const navigate = useNavigate();

    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deadline, setDeadline] = useState(new Date());
    const [important, setImportant] = useState(false);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        axios.get(`api/tasks/${id}`)
            .then((res)=> {
                setTitle(res.data.title);
                setDescription(res.data.description);
                setDeadline(res.data.deadline);
                setImportant(res.data.important);
                setCompleted(res.data.completed);
            }, (e)=>{alert(e.message)});
    }, [id]);

    const editTask = () => {
        axios.put(`api/tasks/edit/${id}`, {title: title, description: description, deadline: deadline, important: important, completed: completed})
            .then(()=> {navigate("/")}, (e)=>{alert(e.message)});
    }

    return (
        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 h-fit p-4 rounded-lg shadow-lg m-auto bg-gray-100 text-gray-600 transition duration-75">
            <h1 className="text-center uppercase border-b-4 border-red-200 text-xl font-bold">Edit Task</h1>
            <form className="mx-2 mt-2 text-lg justify-center items-center" onSubmit={()=>{editTask(); return false;}}>
                <div className="flex flex-col w-full my-2">
                    <label htmlFor="title">Title : </label>
                    <input id="title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required className="px-2 mb-3 border-b border-gray-500 bg-gray-100 focus:outline-none"/>
                    <label htmlFor="description">Description : </label>
                    <textarea id="description" value={description} onChange={(e)=>setDescription(e.target.value)} required className="px-2 mb-3 border border-gray-500 bg-gray-100 focus:outline-none" rows="4"/>
                    <label htmlFor="deadline">Deadline : </label>
                    <input id="deadline" value={deadline} type="date" onChange={(e)=>setDeadline(e.target.value)} required className="px-2 mb-3 border border-gray-500 bg-gray-100 focus:outline-none"/>
                    <div className="flex flex-row justify-center items-center mb-2">
                        <label htmlFor="important" className="mx-2">Important?</label>
                        <input id="important" type="checkbox" checked={important} onChange={(e)=>setImportant(e.target.checked)} />
                        <label htmlFor="completed" className="mx-2">Completed?</label>
                        <input id="completed" type="checkbox" checked={completed} onChange={(e)=>setCompleted(e.target.checked)} />
                    </div>
                    <div className="flex flex-row justify-center items-center mt-4">
                        <NavLink to="/" className="btn warning mx-2 uppercase">Cancel</NavLink>
                        <button type="submit" className="btn safe mx-2 uppercase">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default TaskEdit;