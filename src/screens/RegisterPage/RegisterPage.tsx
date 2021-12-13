import React, { useState } from 'react';
import './RegisterPage.css';
import FormInput from '../../components/FormInput/FormInput';

const RegisterPage = () => {
    const [values, setValues] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmedPassword: '',
    });

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
            id: 3,
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
            id: 4,
            name: 'confirmedPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: "Passwords don't match!",
            label: 'Confirm Password',
            pattern: values.password,
            required: true,
        },
    ];
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const submitHandler = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
    };

    return (
        <div className="app">
            <form onSubmit={submitHandler}>
                <h1>Registration</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <button type="button">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
