import { useParams } from "react-router-dom";

function TaskView() {
    const {id} = useParams();

    return (
        <div>
        <h1>View Task: {id}</h1>
        </div>
    )
}

export default TaskView;