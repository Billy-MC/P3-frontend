import { Box, Divider, MenuItem } from '@mui/material';
import React, { useState, useEffect } from 'react';
import SelectField from '../../../../components/SelectField';
import InputField from '../../../../components/InputField';
import useInput from '../../../../hooks/useInput';
import styles from './BasicDetails.module.scss';
import { validateNumber } from '../../../../utils/validator';

const valueIsNotEmpty = (value: string) => value.trim() !== '';
const valueIsNumber = (value: string) => value.trim() !== '' && validateNumber(value);

const BasicDetails = () => {
    const [formIsValid, setFormIsValid] = useState(true);

    const {
        value: productNameValue,
        isValid: productNameIsValid,
        hasError: productNameHasError,
        valueChangeHandler: productNameChangeHandler,
        inputBlurHandler: productNameBlurHandler,
        reset: resetProductName,
    } = useInput(valueIsNotEmpty, '');

    const {
        value: skuValue,
        isValid: skuIsValid,
        hasError: skuHasError,
        valueChangeHandler: skuChangeHandler,
        inputBlurHandler: skuBlurHandler,
        reset: resetSku,
    } = useInput(valueIsNumber, '');

    const {
        value: categoryValue,
        isValid: categoryIsValid,
        valueChangeHandler: categoryChangeHandler,
        inputBlurHandler: categoryBlurHandler,
    } = useInput(valueIsNotEmpty, '');

    const {
        value: barCodeValue,
        isValid: barCodeIsValid,
        hasError: barCodeHasError,
        valueChangeHandler: barCodeChangeHandler,
        inputBlurHandler: barCodeBlurHandler,
        reset: resetBarCode,
    } = useInput(valueIsNumber, '');

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(productNameIsValid);
            setFormIsValid(skuIsValid);
            setFormIsValid(categoryIsValid);
            setFormIsValid(barCodeIsValid);
        });

        return () => {
            clearTimeout(identifier);
        };
    }, [productNameIsValid, skuIsValid, barCodeIsValid]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formIsValid === false) {
            return;
        }

        resetProductName();
        resetSku();
        resetBarCode();
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <h2 className={styles['basicdetailsform-subtitle']}>Basic Details</h2>

            <Divider />

            <Box className={styles['basicdetailsform-input']}>
                <Box className={styles['basicdetailsform-input_form']}>
                    <Box className={styles['basicdetailsform-input_field']}>
                        <InputField
                            required
                            id="productName"
                            label="Product Name"
                            type="text"
                            value={productNameValue}
                            onChange={productNameChangeHandler}
                            onBlur={productNameBlurHandler}
                            error={productNameHasError}
                        />

                        {productNameHasError && (
                            <p className={styles['basicdetailsform-error']}>
                                This field is required.
                            </p>
                        )}
                    </Box>

                    <Box className={styles['basicdetailsform-input_field']}>
                        <InputField
                            required
                            id="sku"
                            label="SKU "
                            type="text"
                            value={skuValue}
                            onChange={skuChangeHandler}
                            onBlur={skuBlurHandler}
                            error={skuHasError}
                        />

                        {productNameHasError && (
                            <p className={styles['basicdetailsform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>

                    <SelectField
                        className={styles['basicdetailsform-input_select']}
                        id="category"
                        label="Category"
                        value={categoryValue}
                        onChange={categoryChangeHandler}
                        onBlur={categoryBlurHandler}
                        required
                    >
                        <MenuItem value={10}>Coumpters</MenuItem>
                        <MenuItem value={20}>Phones</MenuItem>
                        <MenuItem value={30}>Accesories</MenuItem>
                    </SelectField>

                    <Box className={styles['basicdetailsform-input_field']}>
                        <InputField
                            required
                            id="barCode"
                            label="BarCode "
                            type="text"
                            value={barCodeValue}
                            onChange={barCodeChangeHandler}
                            onBlur={barCodeBlurHandler}
                            error={barCodeHasError}
                        />

                        {barCodeHasError && (
                            <p className={styles['basicdetailsform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default BasicDetails;
