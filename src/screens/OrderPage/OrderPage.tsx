import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabFilter from '../../components/TabFilter';
import OrderAll from './components/OrderAll';
import OrderCancel from './components/OrderCancel';
import OrderCompleted from './components/OrderCompleted';
import OrderPending from './components/OrderPending';
import OrderRejected from './components/OrderRejected';
import OrderPageSearchBar from './components/OrderPageSearchBar';
import styles from './OrderPage.module.scss';
import AddButton from './components/AddButton';
import OrderDataGrid from './components/OrderDataGrid';

const OrderPage = () => {
    const ORDER_FILTER = [
        {
            name: 'All',
            children: <OrderAll />,
        },
        {
            name: 'Canceled',
            children: <OrderCancel />,
        },
        {
            name: 'Completed',
            children: <OrderCompleted />,
        },
        {
            name: 'Pending',
            children: <OrderPending />,
        },
        {
            name: 'Reject',
            children: <OrderRejected />,
        },
    ];

    return (
        <>
            <Box className={styles['orderpage-box']}>
                <Toolbar className={styles['orderpage-toolbar']}>
                    <Typography className={styles['orderpage-header']}>Orders</Typography>
                    <AddButton />
                </Toolbar>
            </Box>
            <TabFilter filter={ORDER_FILTER} />
            <OrderPageSearchBar />
            <OrderDataGrid />
        </>
    );
};

export default OrderPage;
