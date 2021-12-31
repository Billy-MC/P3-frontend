import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, FormControlLabel, Checkbox } from '@mui/material';
import styles from './RegisterPage.module.scss';
import ButtonPrimary from '../../components/Button';
import InputField from '../../components/InputField';
import PasswordInputField from '../../components/PasswordInputField';
import useInput from '../../hooks/useInput';
import { validateEmail, validatePassword } from '../../utils/validator';

const inputEmailIsValid = (value: string) => validateEmail(value.toLowerCase());
const inputPasswordIsValid = (value: string) => validatePassword(value) && value.trim() !== '';
const valueIsNotEmpty = (value: string) => value.trim() !== '';

const RegisterPage = () => {
    const [checked, setChecked] = useState(false);
    const [formIsValid, setFormIsValid] = useState(true);

    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(inputEmailIsValid);
    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } = useInput(valueIsNotEmpty);
    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(valueIsNotEmpty);

    const {
        value: passwordValue,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetpassword,
    } = useInput(inputPasswordIsValid);

    const {
        value: comfirmPasswordValue,
        isValid: comfirmPasswordIsValid,
        hasError: comfirmPasswordHasError,
        valueChangeHandler: comfirmPasswordChangeHandler,
        inputBlurHandler: comfirmPasswordBlurHandler,
        reset: resetComfirmPassword,
    } = useInput(inputPasswordIsValid);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid &&
                    firstNameIsValid &&
                    lastNameIsValid &&
                    passwordIsValid &&
                    comfirmPasswordIsValid,
            );
        });

        return () => {
            clearTimeout(identifier);
        };
    }, [emailIsValid, firstNameIsValid, lastNameIsValid, passwordIsValid, comfirmPasswordIsValid]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formIsValid === false) {
            return;
        }
        resetEmail();
        resetFirstName();
        resetLastName();
        resetpassword();
        resetComfirmPassword();
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
                <InputField
                    required
                    id="email"
                    label="Email"
                    type="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    error={emailHasError}
                />
                {emailHasError && (
                    <p className={styles['registration-error']}>Please Enter valid Email</p>
                )}
                <InputField
                    required
                    id="firstName"
                    label="First Name"
                    type="text"
                    value={firstNameValue}
                    onChange={firstNameChangeHandler}
                    onBlur={firstNameBlurHandler}
                    error={firstNameHasError}
                />
                {firstNameHasError && (
                    <p className={styles['registration-error']}>This field cannot empty</p>
                )}
                <InputField
                    required
                    id="lastName"
                    label="Last Name"
                    type="text"
                    value={lastNameValue}
                    onChange={lastNameChangeHandler}
                    onBlur={lastNameBlurHandler}
                    error={lastNameHasError}
                />
                {lastNameHasError && (
                    <p className={styles['registration-error']}>This field cannot empty</p>
                )}
                <PasswordInputField
                    required
                    id="password"
                    label="Password"
                    type="password"
                    value={passwordValue}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    error={passwordHasError}
                />
                {passwordHasError && (
                    <p className={styles['registration-error']}>Please Enter valid password</p>
                )}
                <PasswordInputField
                    required
                    id="confirmedPassword"
                    label="Confirm Password"
                    type="password"
                    value={comfirmPasswordValue}
                    onChange={comfirmPasswordChangeHandler}
                    onBlur={comfirmPasswordBlurHandler}
                    error={comfirmPasswordValue !== passwordValue || comfirmPasswordHasError}
                />
                {(comfirmPasswordHasError || comfirmPasswordValue !== passwordValue) && (
                    <p className={styles['registration-error']}>Password must be same</p>
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
