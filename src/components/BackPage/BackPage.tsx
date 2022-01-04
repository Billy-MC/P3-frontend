import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './BackPage.module.scss';

interface Iprops {
    to: string;
    title: string;
}

const BackPage: React.FC<Iprops> = (props) => {
    const { to, title } = props;
    return (
        <Box>
            <Link to={to} className={styles.backBtn}>
                <ArrowBackIcon />
                <h3>{title}</h3>
            </Link>
        </Box>
    );
};

export default BackPage;
