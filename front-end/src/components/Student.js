import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVolunteers } from '../store/actions/master';

export const Student = () => {
    const volunteers = useSelector(state => state.studentReducer.volunteers);
    const taskView = useSelector(state => state.adminReducer.taskView);
    const userView = useSelector(state => state.adminReducer.userView);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVolunteers())
    }, [])

    return (
        <div className='show-volunteers'>
            <h2>Available Volunteers</h2>

            {
                volunteers ? volunteers.map(vol => {
                    return (
                        <div className='volunteers' key={vol.id} >
                        <h4>Username:</h4>
                        <h4>{vol.username}</h4>
                        </div>
                    )
                }) : null
            }
        </div>
    )
}