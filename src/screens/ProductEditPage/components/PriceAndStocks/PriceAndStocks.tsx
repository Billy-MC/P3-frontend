import { Box, Divider } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import InputField from '../../../../components/InputField';
import useInput from '../../../../hooks/useInput';
import styles from './PriceAndStocks.module.scss';
import { validateNumber } from '../../../../utils/validator';

const valueIsNumber = (value: string) => value.trim() !== '' && validateNumber(value);

const PriceAndStocks = () => {
    const [formIsValid, setFormIsValid] = useState(true);

    const {
        value: oldPriceValue,
        isValid: oldPriceIsValid,
        hasError: oldPriceHasError,
        valueChangeHandler: oldPriceChangeHandler,
        inputBlurHandler: oldPriceBlurHandler,
        reset: resetoldPrice,
    } = useInput(valueIsNumber, '');

    const {
        value: newPriceValue,
        isValid: newPriceIsValid,
        hasError: newPriceHasError,
        valueChangeHandler: newPriceChangeHandler,
        inputBlurHandler: newPriceBlurHandler,
        reset: resetnewPrice,
    } = useInput(valueIsNumber, '');

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(oldPriceIsValid);
            setFormIsValid(newPriceIsValid);
        });
        return () => {
            clearTimeout(identifier);
        };
    }, [oldPriceIsValid, newPriceIsValid]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formIsValid === false) {
            return;
        }

        resetoldPrice();
        resetnewPrice();
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <h2 className={styles['priceandstocksform-subtitle']}>Price And Stocks</h2>

            <Divider />

            <Box className={styles['priceandstocksform-input']}>
                <Box className={styles['priceandstocksform-input_form']}>
                    <Box className={styles['priceandstocksform-input_field']}>
                        <InputField
                            required
                            id="oldPrice"
                            label="Old Price "
                            type="text"
                            value={oldPriceValue}
                            onChange={oldPriceChangeHandler}
                            onBlur={oldPriceBlurHandler}
                            error={oldPriceHasError}
                        />

                        {oldPriceHasError && (
                            <p className={styles['priceandstocksform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>

                    <Box className={styles['priceandstocksform-input_field']}>
                        <InputField
                            required
                            id="newPrice"
                            label="New Price "
                            type="text"
                            value={newPriceValue}
                            onChange={newPriceChangeHandler}
                            onBlur={newPriceBlurHandler}
                            error={newPriceHasError}
                        />

                        {newPriceHasError && (
                            <p className={styles['priceandstocksform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>

                    <Box className={styles['priceandstocksform-input_field']}>
                        <Switch
                            color="primary"
                            name="checkedB"
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />

                        <span>Keep sellinnng when stock is empty</span>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default PriceAndStocks;
