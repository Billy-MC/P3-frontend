import { Box } from '@mui/material';
import EditPageTemplate from '../../components/EditPageTemplate';
import BackToCustomer from './components/BackToCustomer';
import styles from './AddCustomerPage.module.scss';
import AddCustomerForm from './components/AddCustomerForm';

const AddCustomerPage = () => (
    <EditPageTemplate>
        <main className={styles.addcustomercontent}>
            <BackToCustomer />
            <Box className={styles['addcustomercontent-title']}>
                <h2>Add Customer Page</h2>
            </Box>
            <AddCustomerForm />
        </main>
    </EditPageTemplate>
);

export default AddCustomerPage;
