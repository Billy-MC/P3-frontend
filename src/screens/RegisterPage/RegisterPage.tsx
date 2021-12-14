import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './RegisterPage.scss';
import Form from '../../components/User/Form/Form';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmedPassword: '',
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
            name: 'firstName',
            type: 'text',
            placeholder: 'First Name',
            errorMessage: 'First Name should be required',
            label: 'First Name',
            required: true,
        },
        {
            id: 3,
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            errorMessage: 'Last Name should be required',
            label: 'Last Name',
            required: true,
        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage:
                'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^_&*])[a-zA-Z0-9!@#$%^_&*]{8,20}$`,
            label: 'Password',
            required: true,
        },
        {
            id: 5,
            name: 'confirmedPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            label: 'Confirm Password',
            pattern: values.password,
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
        <div className="registerform">
            <div className="registerform-box">
                <div className="registerform-title">Devil CRM System</div>
                <form onSubmit={submitHandler}>
                    <h1>Create an account</h1>
                    {inputs.map((input) => (
                        <Form key={input.id} {...input} onChange={onChange} />
                    ))}
                    <button type="submit">REGISTER</button>
                    <p>
                        {' '}
                        Already have an account? &nbsp;
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default RegisterPage;
