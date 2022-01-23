import * as React from 'react';
// import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { GridColDef } from '@mui/x-data-grid';
// import EditIcon from '@mui/icons-material/Edit';
// import IconButton from '@mui/material/IconButton';
// import { Box, Button } from '@mui/material';
import DataGridTable from '../../../../components/DataGridTable';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchAllInvoices, selectedAllInvoices } from '../../../../store/slices/invoiceSlice';
import IInvoice from '../../../../types/IInvoice';
// import { capitalizor } from '../../../../utils/dataProcessor';
// import {
//     PrimaryKeyLayout,
//     MoneyTag,
// } from '../../../../components/DataGridTable/components/DataGridCells/DataGridCells';
// import StatusBar from '../../../../components/StatusBar';
// import styles from './InvoiceDataGrid.module.scss';

// const countTotalPrice = (params: GridValueGetterParams): number => {
//     const total: number = params.row.products.reduce(
//         (prevValue: number, p: IProduct) => prevValue + p.quantity * p.price,
//         0,
//     );
//     return total;
// };

const orderColumnDef: GridColDef[] = [];

const OrderDataGrid: React.FC = () => {
    const invoices: IInvoice[] = useAppSelector(selectedAllInvoices);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllInvoices());
    }, [dispatch]);

    return (
        <div>
            <DataGridTable
                rows={invoices || []}
                columns={orderColumnDef.map((row) => ({
                    headerClassName: 'super-app-theme--header',
                    ...row,
                }))}
            />
        </div>
    );
};

export default OrderDataGrid;
