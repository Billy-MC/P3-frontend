import * as react from 'react';
import styles from './headingWithSection.module.scss';

interface IHeadingWithSection {
    Heading: react.FC<{}>;
    Section: react.FC<{}>;
}

const HeadingWithSection: react.FC<IHeadingWithSection> = (props) => {
    const { Heading, Section } = props;

    return (
        <div className={styles.headingWithSection}>
            <div className={styles.heading}>
                <Heading />
            </div>
            <div className={styles.section}>
                <Section />
            </div>
        </div>
    );
};

export default HeadingWithSection;
