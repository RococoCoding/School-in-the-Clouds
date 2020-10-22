import React from 'react';
import { useSelector } from 'react-redux';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { useHistory } from 'react-router-dom';




export const MainPage = () => {
    // const signUp = useSelector(state => state.registerReducer.isSignUp);

    const { push } = useHistory();

    return (
        <section>
            <h1>Welcome to School in the Cloud!</h1>
            <div>
            {
                 <RegisterForm />  
            }

                 <p>Already a User?</p>
                 <button onClick={() => push('/login')}>Login</button>

            </div>
        </section>
    )
}