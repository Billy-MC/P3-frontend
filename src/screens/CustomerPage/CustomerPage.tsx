import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import CustomerPageSearchBar from './components/CustomerPageSearchBar';
import CustomerDataGrid from './components/CustomerDataGrid/CustomerDataGrid';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import styles from './CustomerPage.module.scss';

const CustomerPage = () => (
    <>
        <Box className={styles['customerpage-box']}>
            <Toolbar className={styles['customerpage-toolbar']}>
                <Typography className={styles['customerpage-header']}>Customers</Typography>
                <Link to="add" className={styles['customerpage-btnsection']}>
                    <ButtonPrimary className={styles['customerpage-addbtn']}>
                        <AddIcon className={styles['customerpage-addicon']} />
                        Add
                    </ButtonPrimary>
                </Link>
            </Toolbar>
        </Box>
        <CustomerPageSearchBar />
        <CustomerDataGrid />
    </>
);

export default CustomerPage;
