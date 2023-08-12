import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

function TaskItem({task, onDelete}) {
    return <Link to={`/view/${task.taskId}`} className={ "mb-4 shadow-lg rounded-2xl p-4 flex " + (false ? "bg-red-200":"bg-gray-100") }>
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
            <Link to={`/edit/${task.taskId}`} className="btn warning my-auto md:mx-2 md:w-32 text-center">EDIT</Link>
            <button type="button" onClick={()=>onDelete(task.taskId)} className="btn danger my-auto md:mx-2 md:w-32 text-center">DELETE</button>
        </div>
    </Link>
}

export default TaskItem;