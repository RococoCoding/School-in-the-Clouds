import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask, getAllUsers, deleteUser, toggleViewUser, toggleViewTasks } from '../store/actions/master';

export const Admin = () => {
    const tasks = useSelector(state => state.adminReducer.todos);
    const allUsers = useSelector(state => state.studentReducer.volunteers);
    const userView = useSelector(state => state.adminReducer.userView);
    const taskView = useSelector(state => state.adminReducer.taskView);
    const { push } = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks())
        dispatch(getAllUsers())
    }, [])

    return (
        <>
        <div className='controls'>
            {
                taskView 

                ?
                <div>
                <button onClick={() => dispatch(toggleViewUser())}>Student Control</button>
                <button onClick={() => push('/dashboard/create-task')}>Create Task</button>
                </div>

                :

                <button onClick={() => dispatch(toggleViewTasks())}>
                    Volunteer Control
                </button>
            }
            </div>
        
        <div className='task-controls'>
            {
                taskView && tasks ? tasks.map(task => {
                    return (
                        <div className='tasks' key={task.id} >
                            <h2>{task.title}</h2>
                            <p>{task.description}</p>
                            <button onClick={() => push(`/dashboard/change-task/${task.id}`)}>Change Task</button>
                            <button onClick={() => dispatch(deleteTask(task))}>Delete Task</button>
                            </div>
                    )
                })

                : 

                null

            }

            {

                userView && allUsers 

                ?

                allUsers.map(user => {
                    return (
                        <div className='user-control' key={user.id}>
                            <h3>{user.username}</h3>
                            <h3>{user.password}</h3>
                            <h3>{user.email}</h3>

                            <button onClick={() => dispatch(deleteUser(user))}>Delete User</button>
                        </div>
                    )
                })

                :

                null

    }
    </div>  
    </>
    )  
}
      