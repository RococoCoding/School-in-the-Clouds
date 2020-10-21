import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTask } from '../store/actions/master';



export default function TaskList(props) {
  const {due, task, id } = props;
  const dispatch = useDispatch();

  return (
    <div id={id} className="task-container">
      
      <p className="due">{due}</p>
      <p className="task">{task}</p>
      <div className="edit-task">Edit</div>
      <div onClick={()=>dispatch(deleteTask(id))} className="delete-task">Delete</div>
    </div>
  )
}