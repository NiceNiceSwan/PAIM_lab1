import React, {useContext} from "react";
import Task from "../Task";
import{TaskContext} from "../..";
import {useTasks} from "../task-hooks";


export default function ColorList() {

    const {tasks} = useContext(TaskContext);
    console.log("ColorList tasks = ", {tasks})
    //const {tasks} = useTasks();

    if(!tasks.length) return <div>Brak kolorów</div>;
    return (
        <div className = "task-list">
            {
                tasks.map(task => <Task key={task.id} {...task} />)
            }
        </div>
    );
}

