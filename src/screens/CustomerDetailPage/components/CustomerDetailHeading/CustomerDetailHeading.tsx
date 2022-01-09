import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import BackPage from '../../../../components/BackPage/BackPage';
import ButtonPrimary from '../../../../components/Button/ButtonPrimary';
import styles from '../../CustomerDetailPage.module.scss';

const CustomerDetailHeading = () => (
    <>
        <BackPage to="/customers" title="Customer" />
        <Box className={styles['customerdetail-heading']}>
            <Box>
                <h2 className={styles['customerdetail-heading-custname']}>Name</h2>
                <h3 className={styles['customerdetail-heading-custemailtitle']}>
                    Email:
                    <span className={styles['customerdetail-heading-custemail']}>email</span>
                </h3>
            </Box>
            <Link to="/customers/edit">
                <ButtonPrimary className={styles['customerdetail-heading-btn']}>
                    <p>Edit</p>
                    <ModeEditOutlineOutlinedIcon />
                </ButtonPrimary>
            </Link>
        </Box>
    </>
);

export default CustomerDetailHeading;
