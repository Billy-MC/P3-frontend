import React from 'react';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl } from '@mui/material';
import styles from './PasswordFormField.module.scss';

export interface PasswordFormProps {
    label: string;
    className?: string;
}
interface State {
    password: string;
    showPassword: boolean;
}

const PasswordForm: React.FC<PasswordFormProps> = (props) => {
    const { label, className } = props;

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
        <FormControl
            className={`${styles.passwordfield} ${className}`}
            variant="outlined"
            size="small"
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
    );
};

export default PasswordForm;
