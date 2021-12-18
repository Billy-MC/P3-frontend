import * as react from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import styles from './welcomeHeading.module.scss';

interface IHeading {
    companyName: string;
}

const WelcomeHeading: react.FC<IHeading> = (props) => {
    const { companyName } = props;
    return (
        <div className={styles.welcomeHeading}>
            <div className={styles.logo}>
                <p>logo</p>
            </div>
            <div className={styles.company}>
                <h2>{companyName}</h2>
            </div>
        </div>
    );
};
export default WelcomeHeading;
