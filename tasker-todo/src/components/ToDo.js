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
            <Task key={id} id={id} task={{text:""}}
            functionDeleteTask={deleteTask}></Task>])
    }

    const deleteTask = (id) => {
        setTasks (old => old.filter((task) => task?.props?.id !== id))
    }

    const taskRenderer = () => {
        var tasksCopy = [...tasks]
        tasksCopy = tasksCopy.filter((element) => element?.props.task.text.indexOf(text) !== -1)
        return tasksCopy.map((task) => {return task})
    }

    const editSearchBar = (e) => setText(e.target.value)
    
    return (
        <div className='todo-section'>
            <input onChange={editSearchBar} value={text} className='todo-search' placeholder='search your task here'></input>
            <div className="todo">
                {taskRenderer()}
            </div>
            <button className="bottom" onClick={addTask}>add task</button>
        </div>
    );
}