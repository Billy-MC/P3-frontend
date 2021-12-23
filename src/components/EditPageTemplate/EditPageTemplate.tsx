import { Box, Container } from '@mui/material';
import React from 'react';
import styles from './editPageTemplate.module.scss';

interface Iprops {
    children: React.ReactNode;
}
// resposive Container
// Children could set {width:100%} for usage of reposibility.
const EditPageTemplate: React.FC<Iprops> = (props) => {
    const { children } = props;
    return (
        <Box className={styles.page}>
            <Container className={styles.content}>{children}</Container>
        </Box>
    );
};

export default EditPageTemplate;
