import * as react from 'react';
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const WelcomeSection: react.FC = () => (
    <div>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
            <Link to="/login">
                <Button>Login</Button>
            </Link>
            <Link to="/register">
                <Button>Register</Button>
            </Link>
        </Stack>
    </div>
);

export default WelcomeSection;
