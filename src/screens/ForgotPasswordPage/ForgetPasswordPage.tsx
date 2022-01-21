import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import styles from './ForgetPasswordPage.module.scss';
import InputField from '../../components/InputField';
import useInput from '../../hooks/useInput';
import ButtonPrimary from '../../components/Button';
import { validateEmail } from '../../utils/validator';

const inputEmailIsValid = (value: string) => validateEmail(value.toLowerCase());

const ForgetPasswordPage = () => {
    const [formIsValid, setFormIsValid] = useState(false);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(inputEmailIsValid, '');

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailIsValid);
        });
        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (formIsValid === false) {
            return;
        }
        resetEmail();
    };

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
                <InputField
                    required
                    id="email"
                    label="Email"
                    type="text"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    error={emailHasError}
                />
                {emailHasError && (
                    <p className={styles['forgotPassword-error']}>Please Enter valid Email</p>
                )}
                <ButtonPrimary className={styles['forgotPassword-btn']} type="submit">
                    Recover Password
                </ButtonPrimary>
                <p className={styles['forgotPassword-redirect']}>
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
