import { useState, useEffect } from 'react';
import SearchBar from '../../../../components/SearchBar';
import { fetchAllCustomers, selectCustomers } from '../../../../store/slices/customerSlice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

import styles from './CustomerPageSearchBar.module.scss';

const CustomerPageSearchBar = () => {
    const [searchwords, setSearchWords] = useState<string>('');
    const customers = useAppSelector(selectCustomers);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllCustomers());
    }, [dispatch]);
    return (
        <>
            <SearchBar
                placeHolder="Enter Customer First Name"
                className={styles.styledInputBase}
                searchByClick={(data: string) => setSearchWords(data)}
            />
            {customers
                .filter((customer) =>
                    customer.firstName.toLowerCase().includes(searchwords.toLowerCase()),
                )
                .map((customer) => (
                    <li key={customer.email}>{customer.firstName}</li>
                ))}
        </>
    );
};

export default CustomerPageSearchBar;
