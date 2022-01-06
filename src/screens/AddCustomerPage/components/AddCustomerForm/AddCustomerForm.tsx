import { Box, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../../../../components/InputField';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import useInput from '../../../../hooks/useInput';
import { validateEmail } from '../../../../utils/validator';
import styles from './AddCustomerForm.module.scss';

const inputEmailIsValid = (value: string) => validateEmail(value.toLowerCase());
const valueIsNotEmpty = (value: string) => value.trim() !== '';

const AddCustomerForm = () => {
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
        value: countryValue,
        isValid: countryIsValid,
        hasError: countryHasError,
        valueChangeHandler: countryChangeHandler,
        inputBlurHandler: countryBlurHandler,
        reset: resetCountry,
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

    const {
        value: postCodeValue,
        valueChangeHandler: postCodeChangeHandler,
        reset: resetPostCode,
    } = useInput(valueIsNotEmpty);

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid &&
                    firstNameIsValid &&
                    lastNameIsValid &&
                    addressIsValid &&
                    countryIsValid &&
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
        countryIsValid,
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
        resetCountry();
        resetState();
        resetPostCode();
        resetPhone();
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <h2 className={styles['addform-subtitle']}>Add customer Form</h2>

            <Divider />

            <Box className={styles['addform-input']}>
                <Box className={styles['addform-input_form']}>
                    <Box className={styles['addform-input_field']}>
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
                            <p className={styles['addform-error']}>This field is required.</p>
                        )}
                    </Box>

                    <Box className={styles['addform-input_field']}>
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
                            <p className={styles['addform-error']}>This field is required.</p>
                        )}
                    </Box>

                    <Box className={styles['addform-input_field']}>
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
                            <p className={styles['addform-error']}>Please Enter valid Email</p>
                        )}
                    </Box>

                    <Box className={styles['addform-input_field']}>
                        <InputField
                            required
                            id="country"
                            label="Country"
                            type="text"
                            value={countryValue}
                            onChange={countryChangeHandler}
                            onBlur={countryBlurHandler}
                            error={countryHasError}
                        />

                        {countryHasError && (
                            <p className={styles['addform-error']}>This field is required.</p>
                        )}
                    </Box>

                    <Box className={styles['addform-input_field']}>
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
                            <p className={styles['addform-error']}>This field cannot empty</p>
                        )}
                    </Box>

                    <Box className={styles['addform-input_field']}>
                        <InputField
                            id="address"
                            label="Address"
                            type="text"
                            value={addressValue}
                            onChange={addressChangeHandler}
                            onBlur={addressBlurHandler}
                            error={addressHasError}
                        />

                        {addressHasError && (
                            <p className={styles['addform-error']}>This field is required.</p>
                        )}
                    </Box>

                    <InputField
                        className={styles['addform-input_field']}
                        required
                        id="postcode"
                        label="Post Code"
                        type="text"
                        value={postCodeValue}
                        onChange={postCodeChangeHandler}
                    />

                    <Box className={styles['addform-input_field']}>
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
                            <p className={styles['addform-error']}>This field cannot empty</p>
                        )}
                    </Box>
                </Box>
            </Box>

            <Divider />

            <Box className={styles['addform-btnsection']}>
                <ButtonPrimary className={styles['addform-btnsection_add']} type="submit">
                    Add
                </ButtonPrimary>

                <Link className={styles['addform-btnsection_link']} to="/customers">
                    <ButtonPrimary className={styles['addform-btnsection_cancel']}>
                        CANCEL
                    </ButtonPrimary>
                </Link>
            </Box>
        </Box>
    );
};

export default AddCustomerForm;
