import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Button, Checkbox } from '@mui/material';

import styles from './LoginPage.module.scss';
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
        <div className={styles.login}>
            <Box
                className={styles.login_box}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Typography className={styles.login_title} component="h1" variant="h5">
                    Login to your account
                </Typography>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} />
                ))}
                {passwordInputs.map((passwordInput) => (
                    <PasswordForm key={passwordInput.id} label={passwordInput.label} />
                ))}
                <FormControlLabel
                    className={styles.login_checkBox}
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
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign UP
                </Button>
                <p>
                    Don&lsquo;t have an account? &nbsp;
                    <Link className={styles.login_link} to="/register">
                        Register
                    </Link>{' '}
                </p>
            </Box>
        </div>
    );
};
export default LoginPage;
