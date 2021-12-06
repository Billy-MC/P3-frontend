import { Route as R, Routes } from 'react-router-dom';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';
import UserPage from '../screens/UserPage/UserPage';
import CustomerPage from '../screens/CustomerPage/CustomerPage';
import ProductPage from '../screens/ProductPage/ProductPage';
import OrderPage from '../screens/OrderPage/OrderPage';
import DashboardPage from '../screens/DashboardPage/DashboardPage';
import ForgetPwdPage from '../screens/ForgetPwdPage/ForgetPwdPage';
import WelcomePage from '../screens/WelcomePage/WelcomePage';

const Route = () => (
    <div>
        <Routes>
            <R path="/" element={<WelcomePage />} />
            <R path="/login" element={<LoginPage />} />
            <R path="/register" element={<RegisterPage />} />
            <R path="/forgetpwd" element={<ForgetPwdPage />} />
            <R path="/user" element={<UserPage />} />
            <R path="/customer" element={<CustomerPage />} />
            <R path="/product" element={<ProductPage />} />
            <R path="/order" element={<OrderPage />} />
            <R path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </div>
);

export default Route;
