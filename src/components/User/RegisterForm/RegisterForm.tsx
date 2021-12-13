import React, { useState } from 'react';
import './RegisterForm.css';

type FormInputProps = {
    id: number;
    label: string;
    name: string;
    placeholder: string;
    errorMessage: string;
    required: boolean;
    type: string;
    pattern: string;
    handleChange: React.ChangeEvent<HTMLInputElement>;
    // handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const FormInput = (props: FormInputProps) => {
    const [focused, setFocused] = useState(false);

    const focusHandler = () => {
        setFocused(true);
    };

    const { label, errorMessage, handleChange, id, ...inputProps } = props;

    return (
        <div className="formInput">
            <label htmlFor="">{label}</label>
            <input
                {...inputProps}
                onChange={handleChange}
                onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
                focused={focused.toString()}
                onBlur={focusHandler}
            />
            <span>{errorMessage}</span>
        </div>
    );
};

export default FormInput;
