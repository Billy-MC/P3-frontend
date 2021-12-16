import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import welcomeHeading from './components/welcomeHeading';

const WelcomePage = () => (
    <div>
        <welcomeHeading companyName="devilsCRM" />
        <Link to="/login">
            <Button>Login</Button>
        </Link>
        <Link to="/register">
            <Button>Register</Button>
        </Link>
    </div>
);

export default WelcomePage;
