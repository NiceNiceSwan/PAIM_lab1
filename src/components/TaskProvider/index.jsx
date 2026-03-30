import {useState} from 'react';
import taskData from "../../task-data.json"
import {v4} from "uuid";
import {TaskContext} from "../..";

export default function TaskProvider({children}) {
    const [tasks, setTasks] = useState(taskData);

    const addTask = (title, details, expiry_date, completion) => {
        setTasks([
            ...tasks,
            {
                id: v4(),
                title,
                details,
                expiry_date,
                completion
            }
        ]);
    }

    const setTaskCompletion = (id, completion) =>
        {if (completion === "niewykonane") {
            completion = "po terminie"
        }else if (completion === "po terminie") {
            completion = "wykonane"
        }else {
            completion = "niewykonane"
        }
        setTasks(
            tasks.map(task=>(task.id === id ? {...task, completion}: task))
        );
    }

    const rateTask = (id, rating) =>
        setTasks(
            tasks.map(task=>(task.id === id ? {...task, rating}: task))
        );

    const removeTask = id => setTasks(tasks.filter(task => task.id !== id));
    return (
        <TaskContext.Provider value = {{tasks, addTask, removeTask, setTaskCompletion, rateTask}}>
            {children}
        </TaskContext.Provider>
    );
}