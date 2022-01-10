import { Link } from 'react-router-dom';

const CustomerPage = () => (
    <div>
        <p>Customer page</p>
        <Link to="edit">Edit Button</Link>
        <Link to="add">Add Customer Button</Link>
        <Link to="1">Customer Detail</Link>
    </div>
);

export default CustomerPage;
