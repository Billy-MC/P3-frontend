import * as react from 'react';
import { Link } from 'react-router-dom';
import styles from './welcomeSection.module.scss';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';

const WelcomeSection: react.FC = () => (
    <div className={styles.welcomeSection}>
        <h1 className={styles.welcomeMessage}>
            Welcome to
            <br />
            Devils&apos; B2C CRM System
        </h1>
        <Link to="/login" className={styles.router}>
            <ButtonPrimary className={styles.button}>Start</ButtonPrimary>
        </Link>
    </div>
);

export default WelcomeSection;
