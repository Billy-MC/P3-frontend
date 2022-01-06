import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="edit">Button</Link>
            <Link to="add">Add Customer Button</Link>
        </div>
    );
};

export default CustomerPage;
