import { Link } from 'react-router-dom';

const SideNav = () => (
    <div>
        <ul>
            <li>
                <Link to="/">Welcome</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
            <li>
                <Link to="/forgetpassword">Forget Password</Link>
            </li>
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
