// import React, { useState } from 'react';
import React from 'react';

import './Form.scss';

type FormProps = {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage: string;
    name: string;
};

const Form = (props: FormProps) => {
    // const [passwordShown, setPasswordShown] = useState(false);

    // // Password toggle handler
    // const togglePassword = () => {
    //     // When the handler is invoked
    //     // inverse the boolean state of passwordShown
    //     setPasswordShown(!passwordShown);
    // };
    const { label, onChange, errorMessage, ...inputProps } = props;
    return (
        <div>
            <div className="formInput">
                <label>{label}</label>
                <input {...inputProps} onChange={onChange} />
                <span>{errorMessage}</span>
            </div>
            {/* <div className="formInput">
                <input type={passwordShown ? 'text' : 'password'} />
                <button type="button" onClick={togglePassword}>
                    Show Password
                </button>
                <span>{errorMessage}</span>
            </div> */}
        </div>
    );
};

export default Form;
