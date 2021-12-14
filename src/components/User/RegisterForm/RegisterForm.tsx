import React from 'react';
import './RegisterForm.scss';

type RegisterFormProps = {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage: string;
    name: string;
};

const RegisterForm = (props: RegisterFormProps) => {
    const { label, onChange, errorMessage, ...inputProps } = props;

    return (
        <div className="formInput">
            <label>{label}</label>
            <input {...inputProps} onChange={onChange} />
            <span>{errorMessage}</span>
        </div>
    );
};

export default RegisterForm;
