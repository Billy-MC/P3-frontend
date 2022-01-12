import React from 'react';
import { Link } from 'react-router-dom';

const email = 'ante@aol.net';

const CustomerPage = () => (
    <div>
        <p>Customer page</p>
        <Link to={`/customers/${email}/edit`}>Edit Button</Link>
        <Link to="add">Add Customer Button</Link>
        <Link to={`/customers/${email}`}>Customer Detail</Link>
    </div>
);

export default CustomerPage;
