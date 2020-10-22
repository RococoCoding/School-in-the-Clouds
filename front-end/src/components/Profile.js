import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setErrors } from '../store/actions/master';
import { axiosWithAuth } from "../store/utils/axiosWithAuth";
import { useParams } from 'react-router-dom';
// import { getAllUsers } from '../store/actions/master';


export const Profile=() => {
    
    const [user, setUser] = useState();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
        .get(`/users/id/${id}`)
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            dispatch(setErrors(err))
        })
    }, []);

    return (
    <div>
     <h1>Your Information:</h1>
     <div>
        Id: {user.id}<br/>
        Username: {user.username}<br/>
        Password: {user.password}<br/>
        Role: {user.role}<br/>
    </div>
    </div>
    )
}

