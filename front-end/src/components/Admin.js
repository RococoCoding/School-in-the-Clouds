import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTasks, deleteTask, getAllUsers, deleteUser } from '../store';

export const Admin = () => {
    const todos = useSelector(state => state.volunteerReducer.todos);
    const allUsers = useSelector(state => state.volunteerReducer.volunteers);

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