import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import ButtonPrimary from '../../components/Button';
import styles from './ForgetPasswordPage.module.scss';
import FormField from '../../components/User/Form';

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

const ForgetPasswordPage = () => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

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
    ];

    return (
        <div className={styles.forgotPassword}>
            <Box
                className={styles['forgotPassword-box']}
                component="form"
                onSubmit={handleSubmit}
                autoComplete="off"
            >
                <Typography className={styles['forgotPassword-title']}>
                    Recover my password
                </Typography>

                <span className={styles['forgotPassword-subTitle']}>
                    Tell us your email so we can send you a reset link
                </span>
                {inputs.map((input) => (
                    <FormField key={input.id} {...input} label={input.label} onChange={onChange} />
                ))}
                <ButtonPrimary type="submit">Recover Password</ButtonPrimary>

                <p>
                    Know your password? &nbsp;
                    <Link className={styles['forgotPassword-link']} to="/login">
                        Login
                    </Link>
                </p>
            </Box>
        </div>
    );
};
export default ForgetPasswordPage;
