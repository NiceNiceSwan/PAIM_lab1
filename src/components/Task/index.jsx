import React from 'react';
import StarRating from "../StarRating";
import {useTasks} from "../task-hooks"
import TaskIcon from "../TaskIcon"


export default function Task({id, title, details, expiry_date, completion, rating}) {

    const {rateTask, removeTask, setTaskCompletion} = useTasks();
return (
    <section>
        <h1>{title}</h1>
        <TaskIcon completion = {completion} />
        <button onClick={()=>removeTask(id)} disabled={completion !== "po terminie" && completion !== "wykonane"}>X</button><br/>
        <button onClick={()=>setTaskCompletion(id, completion)}>Zmień status</button><br/>
        {/* <div style={{height:50, backgroundTask:task}} /> */}
        {details}<br/>
        {expiry_date}<br/>
        {completion}<br/>
        <StarRating 
            selectedStars = {rating}
            onRate = {rating =>rateTask(id, rating)}
            completion={completion}
        />
    </section>
)
    
}