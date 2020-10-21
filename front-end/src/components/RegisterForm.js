import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import * as yup from "yup";

const initialFormState = {
  username: "",
  password: "",
  role: "",
}


export default function RegisterForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const { push } = useHistory();

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

  function updateForm(e) {
    setFormState({...formState, [e.target.name]: e.target.value});
  }

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
      .then(valid => {
        setFormErrors({});
        axios.post('/auth/register', formState)
          .then(res => { 
            localStorage.setItem('token',
            res.data);
            push('/loginform');
      })
    })
      .catch(err => {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0]; //put all errors in an obj to mimic errorsState
        }
        setFormErrors(errorsObj); 
      })
        setFormState(initialFormState);
      }

  return (
    <div className="register-form-container">
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

        <label htmlFor="role">Role: </label>
        <select
          type="dropdown"
          name="role"
          onChange={updateForm}
        >
          <option value="">Pick a role</option>
          <option value="admin">Admin</option>
          <option value="student">Student</option>
          <option value="volunteer">Volunteer</option>
        </select>
        {formErrors.role && <p className="error">{formErrors.role}</p>}
        
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}