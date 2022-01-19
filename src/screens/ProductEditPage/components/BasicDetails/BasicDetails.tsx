import { Box, Divider, MenuItem, Switch, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InputField from '../../../../components/InputField';
import SelectField from '../../../../components/SelectField';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import useInput from '../../../../hooks/useInput';
import { validateNumber } from '../../../../utils/validator';
import DeleteConfirmation from '../../../../components/DeleteConfirmationModal';
import { useAppDispatch } from '../../../../hooks/redux';
import IProduct from '../../../../types/IProduct';
import styles from './BasicDetails.module.scss';
import { updateProduct, removeProduct } from '../../../../store/slices/productSlice';

const valueIsNotEmpty = (value: string) => value.trim() !== '';
const valueIsNumber = (value: string) => validateNumber(value);

export interface DetailsProps {
    details: IProduct;
}
const categorySelect: string[] = ['Computers', 'Phones', 'Accesories'];

const BasicDetails: React.FC<DetailsProps> = (props: DetailsProps) => {
    const { details } = props;
    const [formIsValid, setFormIsValid] = useState(true);
    const [openPopup, setOpenPopup] = useState(false);
    const showModal = () => setOpenPopup(true);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const {
        value: productNameValue,
        isValid: productNameIsValid,
        hasError: productNameHasError,
        valueChangeHandler: productNameChangeHandler,
        inputBlurHandler: productNameBlurHandler,
        reset: resetProductName,
    } = useInput(valueIsNotEmpty, details.productName);

    const { value: skuValue } = useInput(valueIsNumber, details.sku);

    const {
        value: categoryValue,
        isValid: categoryIsValid,
        valueChangeHandler: categoryChangeHandler,
        inputBlurHandler: categoryBlurHandler,
    } = useInput(valueIsNotEmpty, details.category);

    const {
        value: descriptionValue,
        valueChangeHandler: descriptionChangeHandler,
        reset: resetDescription,
    } = useInput(valueIsNotEmpty, details.description || '');

    const { value: oldPriceValue } = useInput(valueIsNumber, details.price);

    const {
        value: newPriceValue,
        isValid: newPriceIsValid,
        hasError: newPriceHasError,
        valueChangeHandler: newPriceChangeHandler,
        inputBlurHandler: newPriceBlurHandler,
        reset: resetNewPrice,
    } = useInput(valueIsNumber, details.price || '');

    const {
        value: quantityValue,
        isValid: quantityIsValid,
        hasError: quantityHasError,
        valueChangeHandler: quantityChangeHandler,
        inputBlurHandler: quantityBlurHandler,
        reset: resetQuantity,
    } = useInput(valueIsNumber, details.quantity || '');

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                productNameIsValid && categoryIsValid && newPriceIsValid && quantityIsValid,
            );
        });

        return () => {
            clearTimeout(identifier);
        };
    }, [productNameIsValid, categoryIsValid, newPriceIsValid, quantityIsValid]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (formIsValid === false) {
            return;
        }

        dispatch(
            updateProduct({
                sku: details.sku,
                productName: productNameValue,
                category: categoryValue,
                price: newPriceValue,
                quantity: quantityValue,
                description: descriptionValue,
            }),
        );

        resetProductName();
        resetDescription();
        resetQuantity();
        resetNewPrice();
        navigate({ pathname: `/products/${skuValue}` });
    };

    const deleteHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        dispatch(removeProduct(details.sku));
        navigate({ pathname: '/products' });
    };

    const navigateHandler = () => navigate(-1);

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Box className={styles['editform-details']}>
                <h2 className={styles['editform-title']}>Product Details</h2>
                <Divider />
                <Box className={styles['editform-input']}>
                    <Box className={styles['editform-input_form']}>
                        <Box className={styles['editform-input_field']}>
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
                                <p className={styles['editform-error']}>This field is required.</p>
                            )}
                        </Box>
                        <InputField
                            className={styles['editform-input_field']}
                            required
                            id="sku"
                            label="SKU"
                            type="text"
                            disabled
                            value={skuValue}
                        />
                        <SelectField
                            className={styles['editform-input_select']}
                            id="category"
                            label="Category"
                            value={categoryValue}
                            onChange={categoryChangeHandler}
                            onBlur={categoryBlurHandler}
                            required
                        >
                            {categorySelect.map((category) => (
                                <MenuItem key={category} value={category}>
                                    {category}
                                </MenuItem>
                            ))}
                        </SelectField>
                        <TextField
                            className={styles['editform-input_description']}
                            fullWidth
                            id="description"
                            label="Description"
                            value={descriptionValue}
                            onChange={descriptionChangeHandler}
                            multiline
                            rows={5}
                        />
                    </Box>
                </Box>
            </Box>
            <h2 className={styles['editform-subtitle']}>Price And Stocks</h2>
            <Divider />
            <Box className={styles['editform-input']}>
                <Box className={styles['editform-input_form']}>
                    <InputField
                        className={styles['editform-input_field']}
                        required
                        id="oldPrice"
                        label="Old Price "
                        type="text"
                        disabled
                        value={oldPriceValue}
                    />
                    <Box className={styles['editform-input_field']}>
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
                            <p className={styles['editform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>
                    <Box className={styles['editform-input_field']}>
                        <InputField
                            required
                            id="quantity"
                            label="Quantity "
                            type="text"
                            value={quantityValue}
                            onChange={quantityChangeHandler}
                            onBlur={quantityBlurHandler}
                            error={quantityHasError}
                        />
                        {quantityHasError && (
                            <p className={styles['editform-error']}>
                                This field cannot empty & only can number
                            </p>
                        )}
                    </Box>
                </Box>
                <Box className={styles['editform-switch']}>
                    <Switch
                        color="primary"
                        name="checked"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                    <span>Keep selling when stock is empty</span>
                </Box>
            </Box>
            <Box className={styles['editform-btnsection']}>
                <ButtonPrimary className={styles['editform-btnsection_update']} type="submit">
                    Update
                </ButtonPrimary>
                <ButtonPrimary
                    className={styles['editform-btnsection_cancel']}
                    onClick={navigateHandler}
                >
                    Cancel
                </ButtonPrimary>
                <ButtonPrimary className={styles['editform-btnsection_delete']} onClick={showModal}>
                    Delete Product
                </ButtonPrimary>
                <DeleteConfirmation
                    onClick={deleteHandler}
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                />
            </Box>
        </Box>
    );
};

export default BasicDetails;
