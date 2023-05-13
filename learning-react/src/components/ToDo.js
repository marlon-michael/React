import React, { useState } from "react";
import Task from "./Task"


export default function ToDo(props){
    const [taskId, setTaskId] = useState(0)
    const [tasks,setTasks] = useState([])
    const [text, setText] = useState("")

    const nextTaskId = () => {
        setTaskId(id => id+1)
        return taskId
    }

    const addTask = () => {
        let id = nextTaskId()
        setTasks(lastTasks => [...lastTasks, 
            <Task key={id} id={id} text={setEditing}
            functionEditTaskText={editTaskText}
            functionDeleteTask={deleteTask}></Task>])
    }

    const editText = (e) => {
        setText(e.target.value)
    }

    const setEditing = (txt) => {
        setText(txt)
    }

    const editTaskText = (id) => {
        console.log("editing")
        tasks.forEach((task) => {
            console.log(id, task?.props?.id)
            setText(task.props.text)
            if (task?.props?.id == id) {
                console.log("achei")
                task.props.text = text
                setText(task?.props?.text)
            }
        })
    }

    const deleteTask = (id) => {
        setTasks (old => old.filter((task) => task?.props?.id != id))
    }
    
    return (
        <div className='todo-section'>
            {text}
            <input onChange={editText} value={text} className='todo-search' placeholder='search your task here'></input>
            <div className="todo">
                {tasks.map(task => task)}
            </div>
            <button className="bottom" onClick={addTask}> add task </button>
        </div>
    );
}