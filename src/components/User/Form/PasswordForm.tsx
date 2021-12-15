import React from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from '@mui/material';
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

interface PasswordFormProps {
    label: string;
}
interface State {
    password: string;
    showPassword: boolean;
}

const PasswordForm: React.FC<PasswordFormProps> = (props) => {
    const { label } = props;

    const [values, setValues] = React.useState<State>({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <ThemeProvider theme={theme}>
            <FormControl
                sx={{ mt: 1.5, width: '32ch' }}
                variant="outlined"
                size="small"
                color="primary"
            >
                <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
                <OutlinedInput
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label={label}
                />
            </FormControl>
        </ThemeProvider>
    );
};

export default PasswordForm;
