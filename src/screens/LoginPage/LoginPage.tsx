import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import ButtonPrimary from '../../components/Button';

import styles from './LoginPage.module.scss';
import FormField from '../../components/User/Form';
import PasswordFormField from '../../components/User/PasswordForm';

interface IInput {
    id: number;
    name: string;
    type: string;
    label: string;
    required: boolean;
}

const initialState = {
    email: '',
};

const LoginPage = () => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState(initialState);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const inputs: IInput[] = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            label: 'Email',
            required: true,
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            label: 'Password',
            required: true,
        },
    ];

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    return (
        <div className={styles.login}>
            <Box
                className={styles['login-box']}
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <Typography className={styles['login-title']}>Login to your account</Typography>
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
                    className={styles['login-checkBox']}
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                        />
                    }
                    label={<Typography variant="subtitle1">Remember me</Typography>}
                />
                <Link className={styles['login-btn_link']} to="/dashboard">
                    <ButtonPrimary className={styles['login-btn']} type="submit">
                        Login
                    </ButtonPrimary>
                </Link>
                <Box
                    className={styles['login-bottom']}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <p>
                        <Link className={styles['login-link']} to="/forgetpassword">
                            Forgot password?
                        </Link>
                    </p>
                    <p>
                        Don&lsquo;t have an account? &nbsp;
                        <Link className={styles['login-link']} to="/register">
                            Register
                        </Link>
                    </p>
                </Box>
            </Box>
        </div>
    );
};
export default LoginPage;
