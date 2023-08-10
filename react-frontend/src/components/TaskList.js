import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
          const response = await axios.get("api/tasks/");
          setTasks(response.data);
        } catch (error) {
          console.error(error);
          alert("Unable to fetch tasks.");
        }
    };

    const deleteItem = (id) => {
        axios.delete(`api/tasks/delete/${id}`)
            .then(response => {
                alert(response.data);
                fetchTasks();
            })
            .catch(error => {
                alert(error)
            }) 
    }

    useEffect(() => {
        fetchTasks();
    }, []);

    return <div>
        {tasks.length?
            tasks.map((task) => {
                return <TaskItem key={task.taskId} task={task} onDelete={deleteItem}/>
            })
            :
            <div className="bg-gray-300 h-64 flex justify-center items-center rounded-2xl">
                <div className="text-center text-4xl text-gray-500 uppercase">no tasks to track</div>
            </div>
        }
    </div>
}

export default TaskList;