import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodos, getTodos, deleteTodo } from '../store/actions/master';
import TodoList from "./TodoList";
import * as yup from "yup";

const initialFormState = {
  title: '',
  description: ''
}

const formSchema = yup.object().shape({
  todos: yup
    .string()
    .min(1, "You must enter a task description.")
})

export default function CreateTask() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const { push } = useHistory();


  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
    dispatch(addTodos(formState));
    dispatch(getTodos())
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
        <label htmlFor="title">Todo: </label>
        <textarea 
          name="todos"
          type='text'
          placeholder="Todo Title"
          value={formState.title}
          onChange={updateForm}
        />
        <label htmlFor="description">Description: </label>
         <textarea 
          name="description"
          type='text'
          placeholder="Enter description here."
          value={formState.description}
          onChange={updateForm}
        />
        {formErrors.todos && <p className="error">{formErrors.todos}</p>}
        <button type="submit">Add Task</button>
      </form>
      {todoList.map((todo, idx) => {
        return (
          <TodoList 
            key={idx}
            id={idx}
            todo={todo.todos}
            deleteTodo={deleteTodo}      
          />
        )
      })}
    </div>
  )
}