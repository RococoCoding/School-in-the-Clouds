import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toggleMain,  setErrors } from '../store/actions/master';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';


const initialFormValues = {
   
    username: '',
    password: '',
    role: ''
}

const initialFormErrors = {
  
    username: '',
    password: '',
    role: ''
}

const initialDisabled = true

export default function RegisterStudent() {
    const [formValues, setFormValues] = useState(initialFormValues)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(initialDisabled)
    // const signUp = useSelector(state => state.registerReducer.isSignUp);
    const dispatch = useDispatch();
    const { push } = useHistory();
    const history = useHistory();

    const formSchema = yup.object().shape({
       username: yup
        .string()
        .min(3, "Your username must be at least three characters long."),
      password: yup
        .string()
        .min(8, "Your password must be at least eight characters long."),
      role: yup
        .string()
        .min(1, "You must pick a role"),
    });

    
    const inputChange = (name, value) => {
        yup
          .reach(formSchema, name)
          .validate(value)
          .then(valid => {
            setFormErrors({
              ...formErrors,[name]: "",})
          })
          .catch(err => {
            setFormErrors({
              ...formErrors,
              [name]: err.errors[0],
            })
          })
    
        setFormValues({
          ...formValues,
          [name]: value
        })
    }

    const submit = (formValues) => {
      
    const newStudent = {
        username: formValues.username.trim(),
        password: formValues.password,
        role: formValues.role
        }
       
    axios 
        .post('https://cloudskool.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            dispatch(toggleMain())
            history.push('/login')
        })
        .catch(err => {
            dispatch(setErrors(err))
        })
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit(formValues)
    }
    
    const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
    }

    useEffect(() => {
       formSchema.isValid(formValues)
            .then(valid => {
                setDisabled(!valid);
            })
    }, [formValues])
    
    return (
    <div>
        <form onSubmit={onSubmit}> 
            <div className='form container' >
                <div className='form-group submit'>
                 <h2>Sign Up</h2>
                 <div className='register-form-container'>

                    <label htmlFor="username">Username: </label>
                            <input 
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={onInputChange}
                            />
                 {formErrors.username && <p className="error">{formErrors.username}</p>}

                 <label htmlFor="password">Password: </label>
                            <input 
                            type="text"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={onInputChange}
                            />
                {formErrors.password && <p className="error">{formErrors.password}</p>}

        <label htmlFor="role">Role: </label>
                        <select
                        type="dropdown"
                        name="role"
                        onChange={onInputChange}
                        >
                        <option value="">Pick a role</option>
                        <option value="admin">Admin</option>
                        <option value="student">Student</option>
                        <option value="volunteer">Volunteer</option>
                        </select>
                {formErrors.role && <p className="error">{formErrors.role}</p>}
        
                <button type="submit">Submit</button>
        </div>
    </div>
    </div>
        </form>
            
     </div>    

    )
}    
