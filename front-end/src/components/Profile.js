import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { setErrors } from '../store/actions/master';


export const Profile = () => {
    const userID = useSelector(state => state.registerReducer.userID);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();
    useEffect(() => {
        axiosWithAuth()
        .get(`/users/id/${userID}`)
        .then(res => {
            setUser(res.data)
        })
        .catch(err => {
            // console.dir(err)
            dispatch(setErrors(err))
        })
    }, [])

    return (
    <div>
     <h1>Your Information:</h1>
     <div>
        username: {user.username}<br/>
        password: {user.password}<br/>
        id: {user.id}<br/>
        role: {user.role}<br/>
    </div>
    </div>
    )
}