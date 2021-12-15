import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

import styles from './ForgetPasswordPage.module.scss';
import Form from '../../components/User/Form/Form';

const ForgetPasswordPage = () => {
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
    return (
        <div className={styles.forget}>
            <Box
                className={styles.forget_box}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <Typography className={styles.forget_title} component="h1" variant="h5">
                    Recover my password
                </Typography>
                <span className={styles.forget_subTitle}>
                    Tell us your email so we can send you a reset link
                </span>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} />
                ))}
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                    Recover Password
                </Button>
                <p>
                    Know your password? &nbsp;
                    <Link className={styles.forget_link} to="/login">
                        Login
                    </Link>{' '}
                </p>
            </Box>
        </div>
    );
};
export default ForgetPasswordPage;
