import React from "react";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../store/actions/todoActions';



export default function TodoList(props) {
  const {due, todo, id } = props;
  const dispatch = useDispatch();

  return (
    <div id={id} className="task-container">
      
      <p className="due">{due}</p>
      <p className="task">{todo}</p>
      <div className="edit-task">Edit</div>
      <div onClick={()=>dispatch(deleteTodo(id))} className="delete-todo">Delete</div>
    </div>
  )
}