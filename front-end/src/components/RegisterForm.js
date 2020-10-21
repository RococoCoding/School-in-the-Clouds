// import React, {useState, useEffect} from "react";
// import { useHistory } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from "axios";
// import * as yup from "yup";


// import { toggleMain, loadingRes, setErrors } from '../store/actions/master';

// const initialFormState = {
//   username: "",
//   password: "",
//   role: "",
// }

// const initialDisabled = true

// export default function RegisterForm() {
//   const [formState, setFormState] = useState(initialFormState);
//   const [formErrors, setFormErrors] = useState({});
//   const [disabled, setDisabled] = useState(initialDisabled)
//   const { push } = useHistory();

//   const signUp = useSelector(state => state.registerReducer.isSignUp);
//   //const loading = useSelector(state => state.adminReducer.loadingRes);
//   //const error = useSelector(state => state.adminReducer.setErrors);
//   const dispatch = useDispatch();




//   const formSchema = yup.object().shape({
//     username: yup
//       .string()
//       .min(3, "Your username must be at least three characters long."),
//     password: yup
//       .string()
//       .min(8, "Your password must be at least eight characters long."),
//     role: yup
//       .string()
//       .min(1, "You must pick a role"),
//   });

//   function updateForm(e) {
//     setFormState({...formState, [e.target.name]: e.target.value});
//   }

//   function submit(e) {
//     e.preventDefault();
//     formSchema.validate(formState, {abortEarly:false})
//       .then(valid => {
//         setFormErrors({
//           ...formErrors,[name]: "",})
//     })
//       .catch(err => {
//         let errors = err.inner;
//         let errorsObj = {};
//         for (let i in errors) {
//           let key = errors[i].params.path;
//           errorsObj[key] = errors[i].errors[0]; //put all errors in an obj to mimic errorsState
//         }
//         setFormErrors(errorsObj); 
//       })
//         setFormState(initialFormState);
//       }


      

//   return (
//     <div className="register-form-container">
//       <form onSubmit={submit}>
//         <label htmlFor="username">Username: </label>
//         <input 
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={formState.username}
//           onChange={updateForm}
//         />
//         {formErrors.username && <p className="error">{formErrors.username}</p>}

//         <label htmlFor="password">Password: </label>
//         <input 
//           type="text"
//           name="password"
//           placeholder="Password"
//           value={formState.password}
//           onChange={updateForm}
//         />
//         {formErrors.password && <p className="error">{formErrors.password}</p>}

//         <label htmlFor="role">Role: </label>
//         <select
//           type="dropdown"
//           name="role"
//           onChange={updateForm}
//         >
//           <option value="">Pick a role</option>
//           <option value="admin">Admin</option>
//           <option value="student">Student</option>
//           <option value="volunteer">Volunteer</option>
//         </select>
//         {formErrors.role && <p className="error">{formErrors.role}</p>}
        
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMain,  setErrors } from '../store/actions/master';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';

const RegisterPageContainer = styled.div`
  text-align: center;
  color: white;
  h2 {
    margin: 0 auto 2% auto;
  }
  .input-container {
    margin: 10% auto;
  }
  form {
    margin: 7% 10%;
  }
  button {
    background-color: var(--purple);
    font-size: 1rem;
    padding: 2% 4%;
    border-radius: 3px;
    color: white;
    font-weight: bolder;
    &:hover {
      color: var(--aqua);
    }
  }
  .error {
    color: red;
  }
`

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
    const signUp = useSelector(state => state.registerReducer.isSignUp);
    //const loading = useSelector(state => state.memberReducer.isLoading);
   // const error = useSelector(state => state.memberReducer.error);
    const dispatch = useDispatch();

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
      
        // const newStudent = {
        //     username: formValues.username.trim(),
        //     password: formValues.password,
        //     role: formValues.role
        // }
       
        axios.post('https://cloudskool.herokuapp.com/api/auth/register', formValues)
        .then(res => {
            dispatch(toggleMain())
        })
        .catch(err => {
            // console.dir(err)
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
    <RegisterPageContainer>
      <form onSubmit={onSubmit}> 
        <div className='form-group submit'>
          <h2>Sign Up</h2>
          <div className='register-form-container'>
            <div className="input-container">
              <label htmlFor="username">Username: </label>
              <input 
                type="text"
                name="username"
                placeholder="Username"
                value={formValues.username}
                onChange={onInputChange}
              />
              {formErrors.username && <p className="error">{formErrors.username}</p>}
            </div>

            <div className="input-container">
              <label htmlFor="password">Password: </label>
              <input 
                type="text"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={onInputChange}
              />
              {formErrors.password && <p className="error">{formErrors.password}</p>}
            </div>

            <div className="input-container">
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
            </div>
      
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </RegisterPageContainer>    
  )
}    
