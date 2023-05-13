import React, { useState } from "react";


export default function Task(props){
    const [id, setId] = useState(props.id)
    const [state, setState] = useState("UNDONE")
    const [task, setTask] = useState("new task"+props.id)

    const deleteTask = () => {
        props.functionDeleteTask(id)
    }

    const editText = () => {
        console.log(id, task)
        props.text(task)
        props.functionEditTaskText(id)
        // setTask(text)
    }

    return (
        <div className="task">
            <p>{id}</p>
            <p>{task}</p>
            <button onClick={editText}>edit</button>
            <button onClick={deleteTask}>remove</button>
        </div>
    );
}