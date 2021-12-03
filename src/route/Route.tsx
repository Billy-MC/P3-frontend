import { Route as R, Routes } from 'react-router-dom';
import LoginPage from '../components/pages/LoginPage/LoginPage';
import RegisterPage from '../components/pages/RegisterPage/RegisterPage';
import UserPage from '../components/pages/UserPage/UserPage';
import CustomerPage from '../components/pages/CustomerPage/CustomerPage';
import ProductPage from '../components/pages/ProductPage/ProductPage';
import OrderPage from '../components/pages/OrderPage/OrderPage';
import DashboardPage from '../components/pages/DashboardPage/DashboardPage';
import ForgetPwdPage from '../components/pages/ForgetPwdPage/ForgetPwdPage';
import WelcomePage from '../components/pages/WelcomePage/WelcomePage';

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
