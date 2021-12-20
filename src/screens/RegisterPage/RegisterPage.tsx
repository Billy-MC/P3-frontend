import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import styles from './RegisterPage.module.scss';
import ButtonPrimary from '../../components/Button';
import Form from '../../components/User/Form/Form';
import PasswordForm from '../../components/User/Form/PasswordForm';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
};
interface IInput {
    id: number;
    name: string;
    type: string;
    errorMessage: string;
    label: string;
    required: boolean;
}

const RegisterPage = () => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState(initialState);

    const inputs: IInput[] = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            errorMessage: 'It should be a valid email address!',
            label: 'Email',
            required: true,
        },
        {
            id: 2,
            name: 'firstName',
            type: 'text',
            errorMessage: 'First Name should be required',
            label: 'First Name',
            required: true,
        },
        {
            id: 3,
            name: 'lastName',
            type: 'text',
            errorMessage: 'Last Name should be required',
            label: 'Last Name',
            required: true,
        },
    ];
    const passwordInputs = [
        {
            id: 1,
            name: 'password',
            type: 'password',
            label: 'Password',
        },
        {
            id: 2,
            name: 'confirmedPassword',
            type: 'password',
            label: 'Confirm Password',
        },
    ];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.registration}>
            <Box
                className={styles['registration-box']}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Typography className={styles['registration-title']}>Create an account</Typography>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} onChange={onChange} />
                ))}
                {passwordInputs.map((passwordInput) => (
                    <PasswordForm key={passwordInput.id} label={passwordInput.label} />
                ))}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                            color="primary"
                        />
                    }
                    label={
                        <Typography variant="subtitle1">
                            Agree with &nbsp;
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to="#"
                                className={styles['registration-link']}
                            >
                                Terms & Condition.
                            </Typography>
                        </Typography>
                    }
                />
                <ButtonPrimary className={styles['registration-btn']} type="submit">
                    Sign UP
                </ButtonPrimary>
                <p>
                    Already have an account? &nbsp;
                    <Link className={styles['registration-link']} to="/login">
                        Login
                    </Link>
                </p>
            </Box>
        </div>
    );
};
export default RegisterPage;
