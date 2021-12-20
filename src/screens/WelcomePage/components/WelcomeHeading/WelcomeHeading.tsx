import * as react from 'react';
import styles from './welcomeHeading.module.scss';
const a = 1;

const WelcomeHeading: react.FC = () => (
    <div className={styles.welcomeHeading}>
        <div className={styles.logo}>
            <p>logo</p>
        </div>
        <div className={a === 1 && styles.company}>
            <h2>DevilsCRM</h2>
        </div>
    </div>
);

export default WelcomeHeading;
