import * as react from 'react';
import WelcomeHeading from '../WelcomeHeading/WelcomeHeading';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import styles from './headingWithSection.module.scss';

const HeadingWithSection: react.FC = () => (
    <div className={styles.headingWithSection}>
        <div className={styles.heading}>
            <WelcomeHeading companyName="DevilCRM" />
        </div>
        <div className={styles.section}>
            <WelcomeSection />
        </div>
    </div>
);

export default HeadingWithSection;
