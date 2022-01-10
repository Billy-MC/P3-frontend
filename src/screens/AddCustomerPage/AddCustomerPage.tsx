import { Box } from '@mui/material';
import BackToCustomer from './components/BackToCustomer';
import styles from './AddCustomerPage.module.scss';
import AddCustomerForm from './components/AddCustomerForm';

const AddCustomerPage = () => (
    <>
        <BackToCustomer />
        <Box className={styles['addcustomercontent-title']}>
            <h2>Add Customer Page</h2>
        </Box>
        <AddCustomerForm />
    </>
);

export default AddCustomerPage;
