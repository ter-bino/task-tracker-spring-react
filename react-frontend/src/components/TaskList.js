import { useState } from "react";
import TaskItem from "./TaskItem";

function TaskList() {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Task 1',
            description: 'Description 1 cause idk',
            deadline: "2023-10-31",
            important: true,
            completed: true
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'Description 2 cause idk',
            deadline: "2023-08-31",
            important: false,
            completed: false
        },
        {
            id: 3,
            title: 'Task 3',
            description: 'Description 3 cause idk',
            deadline: "2024-08-31",
            important: false,
            completed: true
        },
    ]);

    return <div>
        {tasks.length?
            tasks.map((task) => {
                return <TaskItem key={task.id} task={task}/>
            })
            :
            <div className="bg-gray-300 h-64 flex justify-center items-center rounded-2xl">
                <div className="text-center text-4xl text-gray-500 uppercase">no tasks to track</div>
            </div>
        }
    </div>
}

export default TaskList;