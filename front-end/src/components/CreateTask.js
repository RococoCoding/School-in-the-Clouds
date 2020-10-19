import React, {useState} from "react";
import TaskList from "./TaskList";
import * as yup from "yup";

const initialFormState = {
  due: "",
  task: "",
}

const formSchema = yup.object().shape({
  due: yup
    .string(),
  task: yup
    .string()
    .min(1, "You must enter a task description.")
})

export default function CreateTask() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [taskList, setTaskList] = useState([]);

  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
      .then(valid => {
        let newList = [...taskList];
        newList.push(formState);
        setTaskList(newList);
        setFormState(initialFormState);
      })
      .catch(err => {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0]; //put all errors in an obj to mimic errorsState
        }
        setFormErrors(errorsObj); 
      })
   
  }
  
  function deleteTask(id) {
    let newList = [...taskList];
    // console.log(key)
    newList.splice(id, 1);
    setTaskList(newList);
  }

  return (
    <div className="create-task-container">
      <form onSubmit={submit}>
        <label htmlFor="due">Due Date: </label>
        <input 
          name="due"
          type="text"
          value={formState.due}
          onChange={updateForm}
        />
        <label htmlFor="task">Task: </label>
        <textarea 
          name="task"
          placeholder="Enter your task here."
          value={formState.task}
          onChange={updateForm}
        />
        {formErrors.task && <p className="error">{formErrors.task}</p>}
        <button type="submit">Add Task</button>
      </form>
      {taskList.map((task, idx) => {
        return (
          <TaskList 
            key={idx}
            id={idx}
            due={task.due}
            task={task.task}
            deleteTask={deleteTask}      
          />
        )
      })}
    </div>
  )
}