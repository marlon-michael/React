import React, { useEffect, useRef, useState } from "react";


export default function Task(props){
    const [id] = useState(props.id)
    const [editmode, setEditmode] = useState(false)
    const [state, setState] = useState(props.task.state ? props.task.state : "UNDONE")
    const [task, setTask] = useState(props.task.text)
    props.task.text = task
    props.task.state = state
    const editInput = useRef(null)

    const toggleEditmode = () => editmode ? setEditmode(false): setEditmode(true)
    const changeState = () => state === "DONE"? setState("UNDONE") : setState("DONE");
    const deleteTask = () => props.functionDeleteTask(id)
    const updateText = (e) => setTask(e.target.value); props.task.text = task

    useEffect(()=> editmode ? editInput.current.focus() : ()=>{}, [editmode])

    return (
        <div className="task">
            <div className="state-field"><button onClick={changeState} className={"state-button " + state}></button></div>
            {editmode? 
                <input ref={editInput} value={task} onChange={updateText} className="task-input"></input>:
                task.length > 0 ? <p>{task}</p> : <p>do something</p>   
            }
            <div className="button-field">
                <button onClick={toggleEditmode}>{editmode? <div>save</div> : <div>edit</div>}</button>
                <button onClick={deleteTask}>delete</button>
            </div>
        </div>
    );
}