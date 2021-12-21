import { Link } from 'react-router-dom';

const SideNav = () => (
    <div>
        <ul>
            <li>
                <Link to="/customer">Customer</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/product">Product</Link>
            </li>
            <li>
                <Link to="/order">Order</Link>
            </li>
            <li>
                <Link to="/dashboard">Dashboard</Link>
            </li>
        </ul>
    </div>
);
export default SideNav;
