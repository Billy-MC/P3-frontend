import { Box, TextField } from '@mui/material';
import React from 'react';
import styles from './Form.module.scss';

interface FormProps {
    label: string;
    type: string;
    className: null;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = (props) => {
    const { label, type, onChange, className, ...inputProps } = props;
    return (
        <Box>
            <TextField
                autoFocus
                className={`${styles.Button} ${className}`}
                fullWidth
                label={label}
                variant="outlined"
                size="small"
                sx={{ mt: 1.5 }}
                {...inputProps}
                type={type}
                onChange={onChange}
            />
        </Box>
    );
};

export default Form;
