import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import forgetPasswordStyles from './ForgetPasswordPage.module.scss';
import Form from '../../components/User/Form/Form';

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
interface IInput {
    id: number;
    name: string;
    type: string;
    label: string;
    required: boolean;
}
const initialState = {
    email: '',
};

const ForgetPasswordPage = () => {
    const [values, setValues] = useState(initialState);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const inputs: IInput[] = [
        {
            id: 1,
            name: 'email',
            type: 'text',
            label: 'Email',
            required: true,
        },
    ];

    return (
        <div className={forgetPasswordStyles.forget}>
            <Box
                className={forgetPasswordStyles.forget_box}
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
            >
                <ThemeProvider theme={theme}>
                    <Typography
                        className={forgetPasswordStyles.forget_title}
                        component="h1"
                        variant="h5"
                    >
                        Recover my password
                    </Typography>
                </ThemeProvider>

                <span className={forgetPasswordStyles.forget_subTitle}>
                    Tell us your email so we can send you a reset link
                </span>
                {inputs.map((input) => (
                    <Form key={input.id} {...input} label={input.label} onChange={onChange} />
                ))}
                <ThemeProvider theme={theme}>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: 'primary' }}
                    >
                        Recover Password
                    </Button>
                </ThemeProvider>
                <p>
                    Know your password? &nbsp;
                    <Link className={forgetPasswordStyles.forget_link} to="/login">
                        Login
                    </Link>
                </p>
            </Box>
        </div>
    );
};
export default ForgetPasswordPage;
