import { ThemeProvider, createTheme, Button } from '@mui/material';
import * as react from 'react';
import { Link } from 'react-router-dom';
import styles from './welcomeSection.module.scss';

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
        fontSize: 25,
    },
});

const WelcomeSection: react.FC = () => (
    <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeMessage}>
            Welcome to
            <br />
            Devils&apos; B2C CRM System
        </h1>
        <ThemeProvider theme={theme}>
            <Link to="/login" className={styles.router}>
                <Button variant="contained" fullWidth sx={{ borderRadius: 30 }}>
                    Start
                </Button>
            </Link>
        </ThemeProvider>
    </div>
);

export default WelcomeSection;
