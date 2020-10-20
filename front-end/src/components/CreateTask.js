import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTasks, getTasks, deleteTask } from '../store/actions/master';
import TaskList from "./TaskList";
import * as yup from "yup";

const initialFormState = {
  todos: "",
}

const formSchema = yup.object().shape({
  todos: yup
    .string()
    .min(1, "You must enter a task description.")
})

export default function CreateTask() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [taskList, setTaskList] = useState([]);
  const dispatch = useDispatch();
  const { push } = useHistory();


  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
    dispatch(addTasks(formState));
    dispatch(getTasks())
    push('/dashboard')

    // dispatch(deleteTask(id)) 
    //   let newList = [...taskList];
    //   // console.log(key)
    //   newList.splice(id, 1);
    //   setTaskList(newList);
   
  }



  return (
    <div className="create-task-container">
      <form onSubmit={submit}>
        <label htmlFor="todos">Task: </label>
        <textarea 
          name="todos"
          placeholder="Enter your task here."
          value={formState.todos}
          onChange={updateForm}
        />
        {formErrors.todos && <p className="error">{formErrors.todos}</p>}
        <button type="submit">Add Task</button>
      </form>
      {taskList.map((task, idx) => {
        return (
          <TaskList 
            key={idx}
            id={idx}
            task={task.todos}
            deleteTask={deleteTask}      
          />
        )
      })}
    </div>
  )
}