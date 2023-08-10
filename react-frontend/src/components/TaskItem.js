import PropTypes from 'prop-types';

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
    return <div className={ "mb-4 shadow-lg rounded-2xl p-4 flex " + (false ? "bg-red-200":"bg-gray-100") }>
        <div className="flex-grow">
            <div className="font-bold truncate">
                { task.title }
                {task.completed ? <span className="ml-1 text-white px-2 bg-green-500 rounded-full">✓</span>:null}
                {task.important ? <span className="ml-1 text-white px-2 bg-red-500 rounded-full">!</span>:null}
            </div>
            <p>{task.description}</p>
            <p>{task.deadline}</p>
        </div>
        <div className="flex flex-col md:flex-row">
            <button className="px-2 my-auto md:mx-2 md:w-32 text-center bg-yellow-500 rounded-lg text-white">EDIT</button>
            <button type="button" onClick={()=>onDelete(task.taskId)} className="px-2 my-auto md:mx-2 md:w-32 text-center bg-red-500 rounded-lg text-white">DELETE</button>
        </div>
    </div>
}

export default TaskItem;