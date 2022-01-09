import { Link } from 'react-router-dom';
import CustomerPageSearchBar from './components/CustomerPageSearchBar';

const CustomerPage = () => (
    <div>
        <p>Customer page</p>
        <Link to="edit">Edit Button</Link>
        <Link to="add">Add Customer Button</Link>
        <Link to="1">Customer Detail</Link>

        <CustomerPageSearchBar />
    </div>
);

export default CustomerPage;
