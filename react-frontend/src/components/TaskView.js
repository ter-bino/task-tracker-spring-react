import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

function TaskView() {

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


    const formattedDeadline =  (deadline) =>{
        const options = { month: 'long' , day: 'numeric', year: 'numeric'};
        return new Date(deadline).toLocaleString(undefined, options);
    }

    return (
        <div className="flex flex-col w-full md:w-3/4 lg:w-1/2 h-fit p-4 rounded-lg shadow-lg m-auto bg-gray-100 text-gray-600 transition duration-75">
            <h1 className="text-center uppercase border-b-4 border-red-200 text-xl font-bold">Task Information</h1>
            <div className="flex flex-col p-4">
                <div className="mb-2">
                    <span className="border-l-4 border-red-200 pr-4 pl-1 font-bold">Title:</span>
                    <p className="mx-4">
                        {title}
                    </p>
                </div>
                <div className="mb-2">
                    <span className="border-l-4 border-red-200 pr-4 pl-1 font-bold">Description:</span>
                    <br/>
                    <p className="mx-4 text-justify whitespace-pre-line">
                        { description }
                    </p>
                </div>
                <div className="mb-2">
                    <span className="border-l-4 border-red-200 pr-4 pl-1 font-bold">Deadline:</span>
                    <br/>
                    <p className="mx-4">
                        { formattedDeadline(deadline) }
                    </p>
                </div>
                {completed||important? 
                <div v-if="task.isImportant || task.isCompleted">
                    <span className="border-l-4 border-red-200 pr-4 pl-1 font-bold">Additonal Notes:</span>
                    {important?
                    <div className="flex flex-row my-4 items-center">
                        <span className="font-bold text-xl text-white h-6 w-6 bg-red-500 rounded-full text-center">!</span>
                        <p className="mx-4">
                            This task is marked as important
                        </p>
                    </div>
                    : null }
                    {completed?
                    <div v-if="task.isCompleted" className="flex flex-row my-4 items-center">
                        <span className="font-bold text-xl text-white h-6 w-6 bg-green-500 rounded-full text-center">✓</span>
                        <p className="mx-4">
                            This task is marked as completed
                        </p>
                    </div>
                    : null }
                </div>
                :null}
            </div>
            <div className="flex flex-row justify-end items-center mt-4">
                <NavLink to="/" className="btn warning mx-2 uppercase">back</NavLink>
            </div>
        </div>
    )
}

export default TaskView;