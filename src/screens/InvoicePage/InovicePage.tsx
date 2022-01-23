import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './InvoicePage.module.scss';
import InvoiceSearchBar from './components/InvoiceSearchBar';

const InvoicePage = () => (
    <div>
        <Box className={styles['invoice-box']}>
            <Typography className={styles['invoice-header']}>Invoices</Typography>
        </Box>
        <Box className={styles['invoice-box_white']}>
            <InvoiceSearchBar />
        </Box>
    </div>
);

export default InvoicePage;
