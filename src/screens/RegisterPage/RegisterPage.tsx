import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import styles from './RegisterPage.module.scss';
import ButtonPrimary from '../../components/Button';
import FormField from '../../components/User/Form';
import PasswordFormField from '../../components/User/PasswordForm';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmedPassword: '',
};
interface IInput {
    id: string;
    name: string;
    type: string;
    errorMessage?: string;
    label: string;
    required: boolean;
}

const RegisterPage = () => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState(initialState);

    const inputs: IInput[] = [
        {
            id: '1',
            name: 'email',
            type: 'text',
            label: 'Email',
            required: true,
        },
        {
            id: '2',
            name: 'firstName',
            type: 'text',
            label: 'First Name',
            required: true,
        },
        {
            id: '3',
            name: 'lastName',
            type: 'text',
            label: 'Last Name',
            required: true,
        },
        {
            id: '4',
            name: 'password',
            type: 'password',
            label: 'Password',
            required: true,
        },
        {
            id: '5',
            name: 'confirmedPassword',
            type: 'password',
            label: 'Confirm Password',
            required: true,
        },
    ];

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.registration}>
            <Box
                className={styles['registration-box']}
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <Typography className={styles['registration-title']}>Create an account</Typography>
                {inputs.map((input) =>
                    input.type === 'text' ? (
                        <FormField
                            key={input.id}
                            {...input}
                            label={input.label}
                            onChange={onChange}
                        />
                    ) : (
                        <PasswordFormField key={input.id} label={input.label} />
                    ),
                )}

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
