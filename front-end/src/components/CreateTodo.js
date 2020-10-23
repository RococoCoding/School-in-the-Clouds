import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';
import { addTodo, getTodo } from '../store/actions/todoActions';
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

function CreateTodo(props) {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const { push } = useHistory();
  const history = useHistory();
  const { getTodo, addTodo } = props;

  function updateForm(e) {
    setFormState({
      ...formState, 
      [e.target.name]: e.target.value});
  }

  function submit(e) {

    const newTodo = {
      title: formState.title.trim(),
      description: formState.description.trim(),
    }

    e.preventDefault();
    // formSchema.validate(formState, {abortEarly:false})
    addTodo(formState);
    getTodo(newTodo);
    history.push('/admin')
   
  }

  return (
    <div className="create-task-container">
      <form onSubmit={submit}>
        <label htmlFor="title">Todo: </label>
        <textarea 
          name="title"
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
      {
          <TodoList />

      }
    </div>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos
  }
};
export default connect(mapStateToProps, { addTodo, getTodo })(CreateTodo);