import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TaskItem({task, onDelete}) {

    const navigate = useNavigate();

    TaskItem.propTypes = {
        task: PropTypes.shape({
            taskId: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            deadline: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            important: PropTypes.bool.isRequired
        }),
        onDelete: PropTypes.func.isRequired
    };

    return <div onClick={()=>navigate(`/view/${task.taskId}`)} className={ "mb-4 shadow-lg rounded-2xl p-4 flex " + (false ? "bg-red-200":"bg-gray-100") }>
        <div className="flex-grow w-3/5">
            <div className="font-bold truncate">
                { task.title }
                {task.completed ? <span className="ml-1 text-white px-2 bg-green-500 rounded-full">✓</span>:null}
                {task.important ? <span className="ml-1 text-white px-2 bg-red-500 rounded-full">!</span>:null}
            </div>
            <p className="truncate">{task.description}</p>
            <p>{task.deadline}</p>
        </div>
        <div className="flex flex-col md:flex-row">
            <NavLink to={`/edit/${task.taskId}`} className="btn warning my-auto md:mx-2 md:w-32 text-center">EDIT</NavLink>
            <button type="button" onClick={(e)=>{e.stopPropagation();onDelete(task.taskId)}} className="btn danger my-auto md:mx-2 md:w-32 text-center">DELETE</button>
        </div>
    </div>
}

export default TaskItem;