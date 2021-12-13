import React, { useState } from 'react';
import './RegisterPage.css';
import FormInput from '../../components/User/RegisterForm/RegisterForm';

type Data = {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    label: string;
    required: boolean;
    pattern?: string;
}[];

const defaultFormData = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmedPassword: '',
};

const RegisterPage = () => {
    const [values, setValues] = useState(defaultFormData);

    const inputs: Data = [
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

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setValues(defaultFormData);
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;
