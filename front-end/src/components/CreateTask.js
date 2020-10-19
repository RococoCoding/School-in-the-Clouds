import React, {useState} from "react";
import TaskList from "./TaskList";

const initialFormState = {
  title: "",
  task: "",
}

export default function CreateTask() {
  const [formState, setFormState] = useState(initialFormState);
  const [taskList, setTaskList] = useState([]);

  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    let newList = [...taskList];
    newList.push(formState);
    setTaskList(newList);
    setFormState(initialFormState);
  }

  return (
    <div className="create-task-container">
      <form onSubmit={submit}>
        <label>Title: </label>
        <input 
          name="title"
          type="text"
          value={formState.title}
          onChange={updateForm}
        />
        <textarea 
          name="task"
          placeholder="Enter your task here."
          value={formState.task}
          onChange={updateForm}
        />
        <button type="submit">Add Task</button>
      </form>
      {taskList.map((task, idx) => {
        return (
          <TaskList 
            key={idx}
            title={task.title}
            task={task.task}          
          />
        )
      })}
    </div>
  )
}