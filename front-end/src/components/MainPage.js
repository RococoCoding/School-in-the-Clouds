import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import styled from "styled-components";
const Main = styled.section`
    background-color: var(--purple);
    height: 100vh;
    min-height: max-content;
`
const Title = styled.h2`
    text-align: center;
    color: white;
    margin: 0;
    padding: 2% 0;
    font-size: 2.5rem;
`

const FormContainer = styled.div`
    width: max-content;
    margin: 0 auto;
    background-color: var(--darkpurple);
    color: white;
    padding: 2%;
    border-radius: 8px;
`

export const MainPage = () => {
    const signUp = useSelector(state => state.registerReducer.isSignUp);

    return (
        <Main>
            <Title>Welcome to School in the Cloud!</Title>
            <FormContainer>
            {
                signUp ? <RegisterForm /> : <LoginForm /> 
            }
            </FormContainer>
        </Main>
    )
}