import React, {useHistory} from "react";


export default function TaskList(props) {
  const {due, task, id, deleteTask} = props;
  // let history = useHistory();

  function editTask() {
    // history.push("/edit-task");
  }

  return (
    <div id={id} className="task-container">
      <p className="due">{due}</p>
      <p className="task">{task}</p>
      <div onClick={editTask} className="edit-task">Edit</div>
      <div onClick={()=>{deleteTask(id)}} className="delete-task">Delete</div>
    </div>
  )
}