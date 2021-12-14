import React, { useState } from 'react';
// import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import './PasswordForm.scss';

type PasswordFormProps = {
    label: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    errorMessage: string;
    name: string;
};
const eye = <FontAwesomeIcon icon={faEye} />;

const PasswordForm = (props: PasswordFormProps) => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const { label, onChange, errorMessage, ...inputProps } = props;

    return (
        <div>
            <div className="passwordformInput">
                <input
                    {...inputProps}
                    onChange={onChange}
                    type={passwordShown ? 'text' : 'password'}
                />
                <i aria-hidden="true" onClick={togglePassword}>
                    {eye}
                </i>
                {/* <i>{eye}</i> */}

                <span>{errorMessage}</span>
            </div>
        </div>
    );
};

export default PasswordForm;
