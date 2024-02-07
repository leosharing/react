import React, { useState } from 'react'

const ToDoform = () => {
    
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const taskHandler = (e) => {
        setNewTask(e.target.value);
    }

    const addTask = () =>{
        setTasks(newTask);
    }

    const deleteTask = () =>{
        
    }
    
    const moveTaskUp = () =>{
        
    }

    const moveTaskDown = () =>{
        
    }

    return (
        <div>
            <form action="" onSubmit={addTask}>
                <div className="input-group">
                    <input type="text" name="task" id="task" onChange={taskHandler} value={newTask} placeholder='Add task' autoComplete='off' />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ToDoform
