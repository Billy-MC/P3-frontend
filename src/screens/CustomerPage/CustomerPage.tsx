import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CustomerPageSearchBar from './components/CustomerPageSearchBar';

const CustomerPage = () => {
    const [searchwords, setSearchWords] = useState<string>('');
    return (
        <div>
            <p>Customer page</p>
            <Link to="edit">Button</Link>
            <Link to="add">Add Customer Button</Link>
            <CustomerPageSearchBar />
        </div>
    );
};

export default CustomerPage;
