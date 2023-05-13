import React, { useState } from "react";


export default function Task(props){
    const [id, setId] = useState(props.id)
    const [editmode, setEditmode] = useState(false)
    const [state, setState] = useState("UNDONE")
    const [task, setTask] = useState("new task"+props.id)

    var t = 0;

    const deleteTask = () => {
        props.functionDeleteTask(id)
    }

    const changeText = (e) => {
        setTask(e.target.value)
    }

    const editText = () => {
        if (editmode) setEditmode(false)
        else setEditmode(true)
    }

    const changeState = () => {
        if (state == "DONE") setState("UNDONE")
        else setState("DONE")
    }

    const stateField = () => {
        if (state == "DONE") return <button onClick={changeState} className="state-button DONE"></button>
        else return <button onClick={changeState} className="state-button UNDONE"></button>
    }

    const taskField = () => {
        if (editmode) return <input onChange={changeText} value={task} className="task-input"></input>
        else return <p>{task}</p>
    }


    return (
        <div className="task">
            <div className="state-field">{stateField()}</div>
            {taskField()}
            <button onClick={editText}>edit</button>
            <button onClick={deleteTask}>delete</button>
        </div>
    );
}