import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
    fetchCustomerByEmail,
    selectCustomer,
    selectCustomerStatus,
} from '../../store/slices/customerSlice';
import ICustomer from '../../types/ICustomer';
import BackToCustomer from './components/BackToCustomer';
import EditCustomerForm from './components/EditCustomerForm';
import EditCustomerHeader from './components/EditCustomerHeader';
import LoadingSpinner from '../../components/LoadingSpinner';

const CustomerEditPage = () => {
    const { email } = useParams();
    const dispatch = useAppDispatch();
    const status = useAppSelector(selectCustomerStatus);

    useEffect(() => {
        dispatch(fetchCustomerByEmail(email));
    }, [dispatch, email]);

    const customer: ICustomer = useAppSelector(selectCustomer);

    const name = `${customer.firstName} ${customer.lastName}`;

    const details = { ...customer };

    return (
        <>
            <BackToCustomer />
            {status === 'loading' && <LoadingSpinner />}
            {status === 'succeeded' && (
                <>
                    <EditCustomerHeader name={name} email={customer.email} />
                    <EditCustomerForm details={details} />
                </>
            )}
        </>
    );
};

export default CustomerEditPage;
