import { useEffect, useState } from "react";
import TaskItem from "./TaskItem";
import axios from "axios";
import Pagination from "../components/Pagination";

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(5);
    const [items, setItems] = useState(null);
    const [totalItems, setTotalItems] = useState(null);
    const [totalPages, setTotalPages] = useState(null);

    const fetchTasks = async () => {
        try {
          const response = await axios.get(`api/tasks/?page=${page-1}&perPage=${perPage}`);
          setTasks(response.data.content);
          setItems(response.data.numberOfElements)
          setTotalItems(response.data.totalElements);
          setTotalPages(response.data.totalPages);
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
    }, [page, perPage]);

    useEffect(() => {
        setPage(1);
        fetchTasks();
    }, [perPage])

    return <div>
        <div className="flex flex-row justify-start items-center mb-2">
            Show
            <select onChange={(e)=>setPerPage(e.target.value)} className="mx-2 focus:outline-none border-2 border-gray-400 rounded-lg">
                <option value={5} defaultValue>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
            items
        </div>
        {tasks.length?
            tasks.map((task) => {
                return <TaskItem key={task.taskId} task={task} onDelete={deleteItem}/>
            })
            :
            <div className="bg-gray-300 h-64 flex justify-center items-center rounded-2xl">
                <div className="text-center text-4xl text-gray-500 uppercase">no tasks to track</div>
            </div>
        }
        {tasks.length?
            <Pagination page={page} items={items} totalItems={totalItems} totalPages={totalPages} pageChanged={setPage}/>
            : null
        }
    </div>
}

export default TaskList;