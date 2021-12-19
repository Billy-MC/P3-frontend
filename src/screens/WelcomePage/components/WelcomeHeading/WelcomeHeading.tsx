import * as react from 'react';
import styles from './welcomeHeading.module.scss';

const WelcomeHeading: react.FC = () => (
    <div className={styles.welcomeHeading}>
        <div className={styles.logo}>
            <p>logo</p>
        </div>
        <div className={styles.company}>
            <h2>DevilsCRM</h2>
        </div>
    </div>
);

export default WelcomeHeading;
