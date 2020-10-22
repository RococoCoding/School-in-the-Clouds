import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTodo, getTodo, deleteTodo } from '../store/actions/todoActions';
import TodoList from "./TodoList";
import * as yup from "yup";

const initialFormState = {
  title: '',
  description: ''
}

const formSchema = yup.object().shape({
  todos: yup
    .string()
    .min(1, "You must enter a todo description.")
})

export default function CreateTodo() {
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
    dispatch(addTodo(formState));
    dispatch(getTodo())
    push('/admin')
   
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
        <button type="submit">Add Todo</button>
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