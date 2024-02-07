import React, { useState } from 'react';

const ToDoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(-1);
    const [editValue, setEditValue] = useState("");

    const taskHandler = (e) => {
        setNewTask(e.target.value);
    };

    const editTaskHandler = (e) => {
        setEditValue(e.target.value);
    };

    const addTask = (e) => {
        e.preventDefault();
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const editTask = (index) => {
        setEditIndex(index);
        setEditValue(tasks[index]);
        setIsEditing(true);
    };

    const saveTask = (e) => {
        e.preventDefault();
        const updatedTasks = tasks.map((task, i) => (i === editIndex ? editValue : task));
        setTasks(updatedTasks);
        closeForm();
    };

    const closeForm = () => {
        document.getElementById("pop-form").style.display = "none";
        setIsEditing(false);
    };

    return (
        <div className="todolist">
            <h1>To Do List</h1>
            <form onSubmit={addTask}>
                <div className="input-group">
                    <input type="text" name="task" id="task" onChange={taskHandler} value={newTask} placeholder='Add task' autoComplete='off' />
                    <button type="submit">Submit</button>
                </div>
            </form>

            <div className="task-area">
                {tasks.map((task, index) => (
                    <div className="task" key={index}>
                        <p>{task}</p>
                        <div className="button-gp">
                            <button onClick={() => deleteTask(index)}>Delete</button>
                            <button onClick={() => editTask(index)}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>

            {isEditing && (
                <div id="pop-form">
                    <form onSubmit={saveTask}>
                        <input type="text" name="editTask" id="editTask" value={editValue} onChange={editTaskHandler} autoComplete='off' />
                        <div className="button-gp">
                            <button type="submit">Save</button>
                            <button onClick={closeForm}>Exit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ToDoList;
