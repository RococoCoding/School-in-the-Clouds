import React, {useState} from "react";
import { setAdmin, setStudent, setVolunteer, toggleLanding, setUserID, setLoading, loadingRes, setErrors } from '../store';
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import * as yup from "yup";

const initialFormState = {
  username: "",
  password: "",
}

export default function LoginForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .min(3, "Usernames must be at least three characters long."),
    password: yup
      .string()
      .min(8, "Passwords must be at least eight characters long."),
  });

  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
      .then(valid => {
        setFormErrors({});
        axios.post('https://cloudskool.herokuapp.com/api/auth/login', formState)
          .then(res => {
            if(res.data.role === 'admin'){
              dispatchEvent(setAdmin());
            }else if(res.data.role === 'student'){
              dispatchEvent(setStudent());
            }else if(res.data.role === 'volunteer'){
              dispatchEvent(setVolunteer());
            }
           
            dispatch(setUserID(res.data.id))
            dispatch(loadingRes())

            return res
      })
    })
    
          .then(res => {
            if(res.status === 200 && res.data) {
              localStorage.setItem('token', res.data.token)
              push('/dashboard')
            }
          })

      .catch(err => {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0]; //put all errors in an obj to mimic errorsState
        }
        setFormErrors(errorsObj); 
      });
  
  return (
    <div className="login-form-container">
      <form onSubmit={submit}>
        <label htmlFor="username">Username: </label>
        <input 
          type="text"
          name="username"
          placeholder="Username"
          value={formState.username}
          onChange={updateForm}
        />
        {formErrors.username && <p className="error">{formErrors.username}</p>}

        <label htmlFor="password">Password: </label>
        <input 
          type="text"
          name="password"
          placeholder="Password"
          value={formState.password}
          onChange={updateForm}
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
}
