import React, { useState, useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../store/utils/axiosWithAuth';
import { getTodo, changeTodo, deleteTodo } from '../store/actions/todoActions';
import TodoList from "./TodoList";

const todoForm = {
    title: '',
    description: ''
}

function ChangeTodo(props) {
    const [todoEdit, setTodoEdit] = useState(todoForm);
    const [formErrors, setFormErrors] = useState({});
    const [todoList, setTodoList] = useState([]);
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { id } = useParams();
    const { changeTodo } = props;
    const history = useHistory();

    useEffect(() => {
        axiosWithAuth()
        .get(`/todos/${id}`)
        .then(res => {
            setTodoEdit({title: res.data.title, description: res.data.description})
        })
        .catch(err => {
            console.log(err);
        })
    }, [id])

    const handleChange = e => {
        e.preventDefault();
        setTodoEdit({ ...todoEdit, 
          [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        changeTodo(id, todoEdit);
        // dispatch(getTodo())
        history.push('/admin');
    }

    return (
        <div className="change-task-container">
          <form onSubmit={handleSubmit}>

            <label htmlFor="title">Todo: </label>
            <textarea 
              name="todos"
              type='text'
              placeholder="Todo Title"
              value={todoEdit.title}
              onChange={handleChange}
            />

            <label htmlFor="description">Description: </label>
             <textarea 
              name="description"
              type='text'
              placeholder="Enter description here."
              value={todoEdit.description}
              onChange={handleChange}
            />

            {formErrors.todos && <p className="error">{formErrors.todos}</p>}

            <button type="change-button">Change Todo</button>
          </form>
          
          {
              <TodoList />
          }
        </div>
      )
    }

    const mapStateToProps = state => {
      return{
          todos: state.todoReducer.todos
      }
  }
  export default connect(mapStateToProps, { getTodo, changeTodo })(ChangeTodo);

