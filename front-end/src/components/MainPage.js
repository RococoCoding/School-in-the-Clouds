import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
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
    const signUp = useSelector(state => state.registerReducer.isSignUp);

    return (
        <MainPageContainer>
            <h2 className="title">Welcome to School in the Cloud!</h2>
            <div className="form-container">
            {
                signUp ? <RegisterForm /> : <LoginForm /> 
            }
            </div>
        </MainPageContainer>
    )
}