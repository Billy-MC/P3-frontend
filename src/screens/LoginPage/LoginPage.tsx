import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Button, Checkbox } from '@mui/material';

import loginStyles from './LoginPage.module.scss';
import Form from '../../components/User/Form/Form';
import PasswordForm from '../../components/User/Form/PasswordForm';

const LoginPage = () => {
    const [checked, setChecked] = useState(false);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const inputs = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            label: 'Email',
        },
    ];

    const passwordInputs = [
        {
            id: 1,
            name: 'password',
            type: 'password',
            label: 'Password',
        },
    ];

    return (
        <div className={loginStyles.login}>
            <Box
                className={loginStyles.login_box}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Typography className={loginStyles.login_title} component="h1" variant="h5">
                    Login to your account
                </Typography>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} />
                ))}
                {passwordInputs.map((passwordInput) => (
                    <PasswordForm key={passwordInput.id} label={passwordInput.label} />
                ))}
                <FormControlLabel
                    className={loginStyles.login_checkBox}
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            name="checked"
                            color="primary"
                        />
                    }
                    label={<Typography variant="subtitle1">Remember me</Typography>}
                />
                <Link className={loginStyles.login_Btn} to="/dashboard">
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Login
                    </Button>
                </Link>
                <Box
                    className={loginStyles.login_bottom}
                    sx={{ display: 'flex', flexDirection: 'column' }}
                >
                    <p>
                        <Link className={loginStyles.login_link} to="/forgetpassword">
                            Forgot password?
                        </Link>{' '}
                    </p>
                    <p>
                        Don&lsquo;t have an account? &nbsp;
                        <Link className={loginStyles.login_link} to="/register">
                            Register
                        </Link>{' '}
                    </p>
                </Box>
            </Box>
        </div>
    );
};
export default LoginPage;
