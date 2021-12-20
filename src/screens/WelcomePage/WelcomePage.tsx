<<<<<<< HEAD
import React from 'react';
import HeadingWithSection from '../../components/HeadingWithSection';
import WelcomeHeading from './components/WelcomeHeading';
import WelcomeSection from './components/WelcomeSection';
import styles from './welcomePage.module.scss';

const WelcomePage: React.FC = () => (
    <div className={styles.welcomePage}>
        <HeadingWithSection heading={<WelcomeHeading />} section={<WelcomeSection />} />
=======
import HeadingWithSection from '../../components/HeadingWithSection';
import WelcomeHeading from './components/WelcomeHeading';
import WelcomeSection from './components/WelcomeSection';

const WelcomePage = () => (
    <div>
        <HeadingWithSection Heading={WelcomeHeading} Section={WelcomeSection} />
>>>>>>> 540f365a88f4ef69f47c0f53dac550c0741f662a
    </div>
);

export default WelcomePage;
