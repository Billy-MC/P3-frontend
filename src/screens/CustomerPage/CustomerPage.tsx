import { Link } from 'react-router-dom';
import CustomerPageSearchBar from './components/CustomerPageSearchBar';

const CustomerPage = () => (
    <div>
        <p>Customer page</p>
        <Link to="edit">Button</Link>
        <Link to="add">Add Customer Button</Link>
        <CustomerPageSearchBar />
    </div>
);

export default CustomerPage;
