import { useState } from 'react';
import SearchBar from '../../../../components/SearchBar';
import styles from './CustomerPageSearchBar.module.scss';

const CustomerPageSearchBar = () => {
    const [searchwords, setSearchWords] = useState<string>('');

    return (
        <>
            <SearchBar
                placeHolder="customer page"
                className={styles.styledInputBase}
                searchByClick={(data: string) => setSearchWords(data)}
            />
            {customers
                .filter((customer) =>
                    customer.name.toLowerCase().includes(searchwords.toLowerCase()),
                )
                .map((customer) => (
                    <li key={customer.id}>{customer.name}</li>
                ))}
        </>
    );
};

export default CustomerPageSearchBar;
