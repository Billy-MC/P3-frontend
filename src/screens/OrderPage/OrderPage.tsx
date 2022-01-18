import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import OrderTabFilter from './components/OrderTabFilter';
import OrderPageSearchBar from './components/OrderPageSearchBar';
import styles from './OrderPage.module.scss';
import OrderDataGrid from './components/OrderDataGrid';

const OrderPage = () => (
    <div>
        <Box className={styles['orderpage-box']}>
            <Toolbar className={styles['orderpage-toolbar']}>
                <Typography className={styles['orderpage-header']}>Orders</Typography>
            </Toolbar>
        </Box>
        <Box className={styles['orderpage-box_white']}>
            <OrderTabFilter />
            <OrderPageSearchBar />
            <OrderDataGrid />
        </Box>
    </div>
);

export default OrderPage;
