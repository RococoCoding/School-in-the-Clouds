import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask, getAllUsers, deleteUser, toggleViewUser, toggleViewTasks } from '../store/actions/master';

export const Admin = () => {
    const todos = useSelector(state => state.adminReducer.todos);
    const allUsers = useSelector(state => state.adminReducer.volunteers);
    const userView = useSelector(state => state.adminReducer.)

    const { push } = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTasks())
        dispatch(getAllUsers())
    }, [])

    return (
        <div>
            <div></div>
        </div>
    )

}