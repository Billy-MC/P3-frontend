import * as react from 'react';
import WelcomeHeading from './WelcomeHeading';
import WelcomeSection from './WelcomeSection';

const HeadingWithSection: react.FC = () => (
    <div>
        <WelcomeHeading companyName="DevilCRM" />
        <WelcomeSection />
    </div>
);

export default HeadingWithSection;
