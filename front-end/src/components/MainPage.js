import React from 'react';
import RegisterForm from './RegisterForm';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

const MainPageContainer = styled.section`
    height: 100vh;
    min-height: max-content;
    .title {
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
        max-width: 60%; 
        margin: 0 auto;
        background-color: var(--darkpurple);
        color: white;
        padding: 5%;
        border-radius: 8px;
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
                 <button onClick={() => push('/login')}>Login</button>

            </div>
        </MainPageContainer>
    )
}