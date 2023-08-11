import { useParams } from "react-router-dom";

function TaskEdit() {
    const {id} = useParams();

    return (
        <div>
        <h1>Edit Task: {id}</h1>
        </div>
    )
}

export default TaskEdit;