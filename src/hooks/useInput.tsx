import React, { useState } from 'react';

const useInput = (validate: any) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState<boolean>(false);

    const enteredValueIsValid = validate(enteredValue);
    const hasError = !enteredValueIsValid && isTouched;

    const valueChangeHandler = (
        event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    ) => {
        const { value } = event.target;
        setEnteredValue(value);
    };

    const inputBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: enteredValueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    };
};

export default useInput;
