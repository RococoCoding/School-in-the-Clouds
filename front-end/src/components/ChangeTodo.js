import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../store/utils/axiosWithAuth';
import { getTodo, changeTodo, deleteTodo } from '../store/actions/todoActions';
import TodoList from "./TodoList";

const todoForm = {
    title: '',
    description: ''
}

const ChangeTodo = (todo) => {
    const [todoEdit, setTodoEdit] = useState(todoForm);
    const [formErrors, setFormErrors] = useState({});
    const [todoList, setTodoList] = useState([]);
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`api/todos/${id}`)
        .then(res => {
            setTodoEdit(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleChange = e => {
        e.preventDefault();
        setTodoEdit({ ...todoEdit, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(changeTodo(todoEdit));
        dispatch(getTodo())
        push('/admin');
    }

    return (
        <div className="change-task-container">
          <form onSubmit={handleSubmit}>

            <label htmlFor="title">Todo: </label>
            <textarea 
              name="todos"
              type='text'
              placeholder="Todo Title"
              value={todo.title}
              onChange={handleChange}
            />

            <label htmlFor="description">Description: </label>
             <textarea 
              name="description"
              type='text'
              placeholder="Enter description here."
              value={todo.description}
              onChange={handleChange}
            />

            {formErrors.todos && <p className="error">{formErrors.todos}</p>}

            <button type="change-button">Change Todo</button>
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

    export default ChangeTodo;

