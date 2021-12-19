import HeadingWithSection from '../../components/HeadingWithSection';
import WelcomeHeading from './components/WelcomeHeading';
import WelcomeSection from './components/WelcomeSection';

const WelcomePage = () => (
    <div>
        <HeadingWithSection Heading={WelcomeHeading} Section={WelcomeSection} />
    </div>
);

export default WelcomePage;
