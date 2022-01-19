import React from 'react';
import { Button } from '@mui/material';

interface ButtonProps
    extends React.DetailedHTMLProps<
            React.ButtonHTMLAttributes<HTMLButtonElement>,
            HTMLButtonElement
        >,
        React.AriaAttributes {}

const ButtonPrimary: React.FC<ButtonProps> = (props) => {
    const { children, type, className, onClick } = props;
    return (
        <Button className={className} type={type || 'button'} variant="contained" onClick={onClick}>
            {children}
        </Button>
    );
};

export default ButtonPrimary;
