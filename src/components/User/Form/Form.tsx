import { Box, TextField } from '@mui/material';

type FormProps = {
    label: string;
    type: string;
};

const Form = (props: FormProps) => {
    const { label, type } = props;
    return (
        <Box>
            <TextField
                fullWidth
                label={label}
                variant="outlined"
                size="small"
                sx={{ mt: 1.5 }}
                type={type}
            />
        </Box>
    );
};

export default Form;
