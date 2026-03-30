import {useContext} from "react";
import Task from "../Task";
import{TaskContext} from "../..";


export default function TaskList() {

    const {tasks} = useContext(TaskContext);

    if(!tasks.length) return <div>Brak zadań</div>;
    return (
        <div className = "task-list">
            {
                tasks.map(task => <Task key={task.id} {...task} />)
            }
        </div>
    );
}

