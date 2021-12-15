import React from 'react';
import { Box, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#08192d',
        },
        secondary: {
            main: '#00fff0',
        },
    },
    typography: {
        fontSize: 12,
    },
});
interface FormProps {
    label: string;
    type: string;
}

const Form: React.FC<FormProps> = (props) => {
    const { label, type } = props;
    return (
        <Box>
            <ThemeProvider theme={theme}>
                <TextField
                    color="primary"
                    fullWidth
                    label={label}
                    variant="outlined"
                    size="small"
                    sx={{ mt: 1.5 }}
                    type={type}
                />
            </ThemeProvider>
        </Box>
    );
};

export default Form;
