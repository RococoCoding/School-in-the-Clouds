import React from "react";


export default function Task(props) {
  
  const {due, task, id, deleteTask, editTask} = props;

  return (
    <div id={id} className="task-container">
      <p className="due">Due: {due}</p>
      <p className="task">Task: {task}</p>
      <div onClick={()=>editTask(id)} className="edit-task">Edit</div>
      <div onClick={()=>deleteTask(id)} className="delete-task">Delete</div>
    </div>
  )
}