import { Box } from '@mui/material';
import BackToCustomer from './components/BackToCustomer';
import EditCustomerForm from './components/EditCustomerForm';
import styles from './CustomerEditPage.module.scss';

const CustomerEditPage = () => (
    <>
        <BackToCustomer />
        <Box className={styles['editcontent-title']}>
            <h2 className={styles['editcontent-title-custname']}>Name</h2>
            <h3 className={styles['editcontent-title-custemailtitle']}>
                Email:
                <span className={styles['editcontent-title-custemail']}>email</span>
            </h3>
        </Box>
        <EditCustomerForm />
    </>
);

export default CustomerEditPage;
