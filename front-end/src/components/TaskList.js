import React, {useEffect} from "react";


export default function TaskList(props) {
  const {title, task} = props;
  return (
    <div className="task-container">
      <p className="title">{title}</p>
      <p className="task">{task}</p>
    </div>
  )
}