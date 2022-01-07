import * as React from 'react';
import { useEffect } from 'react';
import DataGridTable from '../../../../components/DataGridTable';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { fetchAllCustomers, selectCustomers } from '../../../../store/slices/customerSlice';

const CustomerDataGrid: React.FC = () => {
    const customers = useAppSelector(selectCustomers);
    const dispatch = useAppDispatch();
    const customerToDisplay = customers.map((customer) => {
        const result = { ...customer };
        delete result.notification;
        return result;
    });
    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);
    return (
        <div>
            <DataGridTable rows={customerToDisplay} />
        </div>
    );
};

export default CustomerDataGrid;
