import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { setAdmin, setStudent, setVolunteer, setUserID, loadingRes } from '../store/actions/master';
import { useDispatch } from "react-redux";
import { axiosWithAuth } from '../store/utils/axiosWithAuth';
import * as yup from "yup";

const initialFormState = {
  username: "",
  password: "",
  role: "",
}

export default function LoginForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
  const { push } = useHistory();
  const history = useHistory();

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
    
    const user = {
      username: formState.username.trim(),
      password: formState.password,
      role: formState.role
    }

    e.preventDefault();
    formSchema.validate(formState, {abortEarly:false})
      .then(valid => {
        setFormErrors({});

        axiosWithAuth()
        .post('/auth/login', user)
        
     
          .then(res => {
            window.localStorage.setItem('token', res.data.token)
          //  console.log(res)
            if(res.data.role === 'admin'){
              //dispatch(setAdmin());
              history.push('/admin')

            }else if(res.data.role === 'student'){
              //dispatch(setStudent());
             history.push('/student')

            }else{
              //dispatch(setVolunteer());
             history.push('/volunteer')
            }
           
            dispatch(setUserID(res.data.id))
         
            dispatch(loadingRes())
        

      })
      
    })
    
          // .then(res => {
          //     window.localStorage.setItem('token', res.token)
          //     push('/dashboard')
            
          // })

      .catch(err => {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0]; //put all errors in an obj to mimic errorsState
        }
        setFormErrors(errorsObj); 
      });
    }

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