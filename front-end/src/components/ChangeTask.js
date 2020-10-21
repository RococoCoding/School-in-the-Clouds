import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../store/utils/axiosWithAuth';
import { getTasks, editTask, deleteTask } from '../store/actions/master';
import TaskList from "./TaskList";

const taskForm = {
    title: '',
    description: ''
}

const ChangeTask = (task) => {
    const [taskEdit, setTaskEdit] = useState(taskForm);
    const [formErrors, setFormErrors] = useState({});
    const [taskList, setTaskList] = useState([]);
    const dispatch = useDispatch();
    const { push } = useHistory();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth().get(`api/todos/${id}`)
        .then(res => {
            setTaskEdit(res.data)
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    const handleChange = e => {
        e.preventDefault();
        setTaskEdit({ ...taskEdit, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(editTask(taskEdit));
        dispatch(getTasks())
        push('/dashboard');
    }

    return (
        <div className="create-task-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Task: </label>
            <textarea 
              name="todos"
              type='text'
              placeholder="Task Title"
              value={task.title}
              onChange={handleChange}
            />
            <label htmlFor="description">Description: </label>
             <textarea 
              name="description"
              type='text'
              placeholder="Enter description here."
              value={task.description}
              onChange={handleChange}
            />
            {formErrors.todos && <p className="error">{formErrors.todos}</p>}
            <button type="change-button">Change Task</button>
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

    export default ChangeTask;

