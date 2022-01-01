import { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import styles from './Customer.module.scss';

const CustomerPage = () => {
    const [searchwords, setSearchWords] = useState<string>('');

    useEffect(() => {}, [searchwords]);

    return (
        <div>
            <p>Customer page</p>
            <SearchBar
                placeHolder="customer page"
                className={styles.styledInputBase}
                searchByClick={(data: string) => setSearchWords(data)}
            />
        </div>
    );
};

export default CustomerPage;
