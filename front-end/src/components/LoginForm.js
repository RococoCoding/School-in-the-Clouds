import React, {useState} from "react";
import { useHistory } from 'react-router-dom';
import { setUserID, loadingRes } from '../store/actions/master';
import { useDispatch } from "react-redux";
import { axiosWithAuth } from '../store/utils/axiosWithAuth';
import * as yup from "yup";
import styled from "styled-components";

const LoginPageContainer = styled.div`
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
  .sign-up-link {
    margin-left: 2%;
    &:hover {
      cursor: pointer;
      color: var(--aqua);
    }
  }
  .error {
    color: red;
  }
`

const initialFormState = {
  username: "",
  password: "",
  role: "",
}

export default function LoginForm() {
  const [formState, setFormState] = useState(initialFormState);
  const [formErrors, setFormErrors] = useState({});
  const dispatch = useDispatch();
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
    <LoginPageContainer>
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
    </LoginPageContainer>
  )
}