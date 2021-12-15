import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Container, Typography, FormControlLabel, Button, Checkbox } from '@mui/material';

import styles from './RegisterPage.module.scss';
import Form from '../../components/User/Form/Form';
import PasswordForm from '../../components/User/Form/PasswordForm';

const RegisterPage = () => {
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
        {
            id: 2,
            name: 'firstName',
            type: 'text',
            label: 'First Name',
        },
        {
            id: 3,
            name: 'lastName',
            type: 'text',
            label: 'Last Name',
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

    return (
        <div className={styles.registerform}>
            <Box
                className={styles.registerform_box}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Typography component="h1" variant="h5">
                    Create an account
                </Typography>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} />
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
                                className={styles.registerform_link}
                            >
                                Terms & Condition.
                            </Typography>
                        </Typography>
                    }
                />
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Sign UP
                </Button>
                <p>
                    Already have an account? &nbsp;
                    <Link className={styles.registerform_link} to="/login">
                        Login
                    </Link>{' '}
                </p>
            </Box>
        </div>
    );
};
export default RegisterPage;
