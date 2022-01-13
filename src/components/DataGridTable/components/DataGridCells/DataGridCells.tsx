import * as React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './DataGridCells.module.scss';

interface IPrimaryKeyLayoutProps {
    primary: string;
    secondary: string;
    linkAddress: string;
}

const PrimaryKeyLayout: React.FC<IPrimaryKeyLayoutProps> = (props) => {
    const { primary, secondary, linkAddress } = props;

    return (
        <div>
            <Link to={linkAddress}>
                <Button className={styles.primary}>{primary}</Button>
            </Link>
            <p className={styles.secondary}>{secondary}</p>
        </div>
    );
};

export default PrimaryKeyLayout;
