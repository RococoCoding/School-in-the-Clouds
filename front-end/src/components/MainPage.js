import React from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const MainPageContainer = styled.section`
    height: 100vh;
    min-height: max-content;
    padding-bottom: 10%;
    h1,p {
        text-align: center;
        color: white;
        margin: 0;
        padding: 5% 0;
        font-size: 2rem;
        text-transform: uppercase;
        letter-spacing: 0.3rem;
    }
    .form-container {
        min-width: max-content;
        max-width: 100%; 
        margin: 0 auto;
        background-color: var(--darkpurple);
        color: white;
        padding: 10%;
        border-radius: 8px;
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
    .login{
        margin-left:45%;
       
    }

`


export const MainPage = () => {
    // const signUp = useSelector(state => state.registerReducer.isSignUp);

    const { push } = useHistory();

    return (
        <MainPageContainer>
            <h1>Welcome to School in the Cloud!</h1>
            <div>
            {
                 <RegisterForm /> 
            }

                 <p>Already a User?</p>
                 <button className="login" onClick={() => push('/login')}>Login</button>

            </div>
        </MainPageContainer>
    )
}