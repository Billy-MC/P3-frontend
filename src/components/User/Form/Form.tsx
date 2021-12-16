import { Box, TextField } from '@mui/material';
import React from 'react';

interface FormProps {
    label: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = (props) => {
    const { label, type, onChange, ...inputProps } = props;
    return (
        <Box>
            <TextField
                autoFocus
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
