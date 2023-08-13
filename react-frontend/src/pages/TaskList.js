import { useEffect, useState, useCallback } from "react";
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
    const [search, setSearch] = useState("");

    useEffect(() => {
        setPage(1);
    }, [perPage])

    useEffect(() => {
        setPage(1);
    }, [search])

    const fetchTasks = useCallback(async () => {
        try {
          const response = await axios.get(`api/tasks/?page=${page-1}&perPage=${perPage}&search=${encodeURI(search)}`);
          setTasks(response.data.content);
          setItems(response.data.numberOfElements)
          setTotalItems(response.data.totalElements);
          setTotalPages(response.data.totalPages);
        } catch (error) {
          console.error(error);
          alert("Unable to fetch tasks.");
        }
    }, [page, perPage, search]);

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

    useEffect(()=>{fetchTasks()}, [fetchTasks])

    return <div>
        <div className="flex flex-row justify-between items-center mb-2">
            <div>
                Show
                <select onChange={(e)=>setPerPage(e.target.value)} className="mx-2 focus:outline-none border-2 border-gray-400 rounded-lg">
                    <option value={5} defaultValue>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                </select>
                items
            </div>
            <div>
                Search:
                <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className="ml-2 px-2 w-16 sm:w-32 lg:w-64 focus:outline-none border-2 border-gray-400 rounded-lg"/>
            </div>
        </div>
        <div className="max-h-3/4-screen overflow-x-auto">
            {tasks.length?
                tasks.map((task) => {
                    return <TaskItem key={task.taskId} task={task} onDelete={deleteItem}/>
                })
                :
                <div className="bg-gray-300 h-64 flex justify-center items-center rounded-2xl">
                    <div className="text-center text-4xl text-gray-500 uppercase">no tasks to show</div>
                </div>
            }
        </div>
            {tasks.length?
                <Pagination page={page} items={items} totalItems={totalItems} totalPages={totalPages} pageChanged={setPage}/>
                : null
            }
    </div>
}

export default TaskList;