import React from 'react';

import './Form.scss';

type FormProps = {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage: string;
    name: string;
};

const Form = (props: FormProps) => {
    const { label, onChange, errorMessage, ...inputProps } = props;
    return (
        <div>
            <div className="formInput">
                <label>{label}</label>
                <input {...inputProps} onChange={onChange} />
                <span>{errorMessage}</span>
            </div>
        </div>
    );
};

export default Form;
