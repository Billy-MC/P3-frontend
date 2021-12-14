import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss';
import RegisterForm from '../../components/User/RegisterForm/RegisterForm';

const initialState = {
    email: '',
    password: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState(initialState);
    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            placeholder: 'Email',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^_&*])[a-zA-Z0-9!@#$%^_&*]{8,20}$`,
            label: 'Password',
            required: true,
        },
    ];

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValues(initialState);
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
    };

    return (
        <div className="loginform">
            <div className="loginform-box">
                <div className="loginform-title">Devil CRM System</div>
                <form onSubmit={submitHandler}>
                    <h1>Login to your account</h1>
                    {inputs.map((input) => (
                        <RegisterForm key={input.id} {...input} onChange={onChange} />
                    ))}
                    <button type="submit">Login</button>
                    <p>
                        {' '}
                        <Link to="/forgetpassword">Forgot password?</Link>
                    </p>
                    <p>
                        {' '}
                        Don&lsquo;t have an account? &nbsp;
                        <Link to="/register">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default RegisterPage;
