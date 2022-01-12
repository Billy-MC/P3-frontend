import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import TabFilter from '../../components/TabFilter';
import CustomerDetail from './components/CustomerDetail';
import CustomerDetailHeading from './components/CustomerDetailHeading';
import CustomerInvoice from './components/CustomerInvoice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchCustomerByEmail, selectCustomer } from '../../store/slices/customerSlice';
import ICustomer from '../../types/ICustomer';

const CustomerDetailPage = () => {
    const dispatch = useAppDispatch();
    const { email } = useParams();

    useEffect(() => {
        dispatch(fetchCustomerByEmail(email));
    }, [dispatch, email]);

    const customer: ICustomer = useAppSelector(selectCustomer);

    const FILTER_TITLES = [
        {
            name: 'Details',
            children: <CustomerDetail details={customer} />,
        },
        {
            name: 'Invoices',
            children: <CustomerInvoice />,
        },
    ];
    const name = `${customer.firstName} ${customer.lastName}`;
    return (
        <Container>
            <CustomerDetailHeading name={name} email={customer.email} />
            <TabFilter filter={FILTER_TITLES} />
        </Container>
    );
};

export default CustomerDetailPage;
