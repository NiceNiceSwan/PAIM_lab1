import {useContext} from "react";
import Task from "../Task";
import{TaskContext} from "../..";


export default function ColorList() {

    const {tasks} = useContext(TaskContext);
    console.log("ColorList tasks = ", {tasks})

    if(!tasks.length) return <div>Brak kolorów</div>;
    return (
        <div className = "task-list">
            {
                tasks.map(task => <Task key={task.id} {...task} />)
            }
        </div>
    );
}

