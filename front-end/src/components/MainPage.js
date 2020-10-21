import React from 'react';
import { useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';




export const MainPage = () => {
    const signUp = useSelector(state => state.registerReducer.isSignUp);

    return (
        <section>
            <h1>Welcome to School in the Cloud!</h1>

            {
                signUp ? <RegisterForm /> : <LoginForm /> 
            }

            <div><br/></div>
        </section>
    )
}