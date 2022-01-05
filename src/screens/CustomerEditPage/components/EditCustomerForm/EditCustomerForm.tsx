import { Box, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../../../components/InputField';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import useInput from '../../../../hooks/useInput';
import { validateEmail } from '../../../../utils/validator';
import styles from './EditCustomerForm.module.scss';

const inputEmailIsValid = (value: string) => validateEmail(value.toLowerCase());

const valueIsNotEmpty = (value: string) => value.trim() !== '';

const EditCustomerForm = () => {
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
        value: addressValue,
        isValid: addressIsValid,
        hasError: addressHasError,
        valueChangeHandler: addressChangeHandler,
        inputBlurHandler: addressBlurHandler,
        reset: resetAddress,
    } = useInput(valueIsNotEmpty);

    const {
        value: postCodeValue,
        isValid: postCodeIsValid,
        hasError: postCodeHasError,
        valueChangeHandler: postCodeChangeHandler,
        inputBlurHandler: postCodeBlurHandler,
        reset: resetPostCode,
    } = useInput(valueIsNotEmpty);

    const {
        value: cityValue,
        isValid: cityIsValid,
        hasError: cityHasError,
        valueChangeHandler: cityChangeHandler,
        inputBlurHandler: cityBlurHandler,
        reset: resetCity,
    } = useInput(valueIsNotEmpty);

    const {
        value: stateValue,
        isValid: stateIsValid,
        hasError: stateHasError,
        valueChangeHandler: stateChangeHandler,
        inputBlurHandler: stateBlurHandler,
        reset: resetState,
    } = useInput(valueIsNotEmpty);

    const {
        value: phoneValue,
        isValid: phoneIsValid,
        hasError: phoneHasError,
        valueChangeHandler: phoneChangeHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,
    } = useInput(valueIsNotEmpty);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid &&
                    firstNameIsValid &&
                    lastNameIsValid &&
                    addressIsValid &&
                    postCodeIsValid &&
                    cityIsValid &&
                    stateIsValid &&
                    phoneIsValid,
            );
        });

        return () => {
            clearTimeout(identifier);
        };
    }, [
        emailIsValid,
        firstNameIsValid,
        lastNameIsValid,
        addressIsValid,
        postCodeIsValid,
        cityIsValid,
        stateIsValid,
        phoneIsValid,
    ]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formIsValid === false) {
            return;
        }
        resetEmail();
        resetFirstName();
        resetLastName();
        resetAddress();
        resetPostCode();
        resetCity();
        resetState();
        resetPhone();
    };
    return (
        <Box className={styles.editform} component="form" onSubmit={handleSubmit}>
            <h2 className={styles['editform-subtitle']}>Edit customer</h2>
            <Divider />
            <Box className={styles['editform-input']}>
                <Box className={styles['editform-input_form']}>
                    <Box className={styles['editform-input_field']}>
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
                            <p className={styles['editform-error']}>This field is required.</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
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
                            <p className={styles['editform-error']}>This field is required.</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
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
                            <p className={styles['editform-error']}>Please Enter valid Email</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            required
                            id="address"
                            label="Address"
                            type="text"
                            value={addressValue}
                            onChange={addressChangeHandler}
                            onBlur={addressBlurHandler}
                            error={addressHasError}
                        />
                        {addressHasError && (
                            <p className={styles['editform-error']}>This field is required.</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            id="postcode"
                            label="Post Code"
                            type="text"
                            value={postCodeValue}
                            onChange={postCodeChangeHandler}
                            onBlur={postCodeBlurHandler}
                            error={postCodeHasError}
                        />
                        {postCodeHasError && (
                            <p className={styles['editform-error']}>This field is required.</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            required
                            id="city"
                            label="City/Suburb"
                            type="text"
                            value={cityValue}
                            onChange={cityChangeHandler}
                            onBlur={cityBlurHandler}
                            error={cityHasError}
                        />
                        {cityHasError && (
                            <p className={styles['editform-error']}>This field is required.</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            required
                            id="state"
                            label="State"
                            type="text"
                            value={stateValue}
                            onChange={stateChangeHandler}
                            onBlur={stateBlurHandler}
                            error={stateHasError}
                        />
                        {stateHasError && (
                            <p className={styles['editform-error']}>This field cannot empty</p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            required
                            id="phone"
                            label="Mobile Phone Number"
                            type="text"
                            value={phoneValue}
                            onChange={phoneChangeHandler}
                            onBlur={phoneBlurHandler}
                            error={phoneHasError}
                        />
                        {phoneHasError && (
                            <p className={styles['editform-error']}>This field cannot empty</p>
                        )}
                    </Box>
                </Box>
            </Box>
            <Divider />
            <Box className={styles['editform-btnsection']}>
                <ButtonPrimary className={styles['editform-btnsection_update']} type="submit">
                    Update
                </ButtonPrimary>
                <Link className={styles['editform-btnsection_cancel']} to="/customers">
                    CANCEL
                </Link>
                <ButtonPrimary className={styles['editform-btnsection_delete']} type="submit">
                    Delete User
                </ButtonPrimary>
            </Box>
        </Box>
    );
};
export default EditCustomerForm;
