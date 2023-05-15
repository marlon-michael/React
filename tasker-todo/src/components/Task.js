import React, { useState } from "react";


export default function Task(props){
    const [id] = useState(props.id)
    const [editmode, setEditmode] = useState(false)
    const [state, setState] = useState("UNDONE")
    const [task, setTask] = useState(props.task.text)
    props.task.text = task

    const toggleEditmode = () => editmode ? setEditmode(false) : setEditmode(true)
    const changeState = () => state === "DONE"? setState("UNDONE") : setState("DONE");
    const deleteTask = () => props.functionDeleteTask(id)
    const updateText = (e) => setTask(e.target.value); props.task.text = task

    return (
        <div className="task">
            <div className="state-field"><button onClick={changeState} className={"state-button " + state}></button></div>
            {editmode? 
                <input value={task} onChange={updateText} placeholder="new task" className="task-input"></input>:
                task.length > 0 ? <p>{task}</p> : <p>new task</p>   
            }
            <button onClick={toggleEditmode}>{editmode? <div>save</div> : <div>edit</div>}</button>
            <button onClick={deleteTask}>delete</button>
        </div>
    );
}