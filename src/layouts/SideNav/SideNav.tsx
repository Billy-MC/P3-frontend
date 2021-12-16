import { Link } from 'react-router-dom';

const SideNav = () => (
    <div>
        <ul>
<<<<<<< HEAD:src/layouts/SideNav/SideNav.tsx
<<<<<<< HEAD:src/layouts/SideNav/SideNav.tsx
<li>
||||||| constructed merge base:src/layouts/sideNav/SideNav.tsx
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
=======
            {/* <li>
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
            </li> */}
||||||| constructed merge base:src/layouts/sideNav/SideNav.tsx
            {/* <li>
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
            </li> */}
=======
>>>>>>> added FC and ReactNode types:src/layouts/sideNav/SideNav.tsx
        <li>
>>>>>>> all problems related to sideBar solved:src/layouts/sideNav/SideNav.tsx
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
