import { Route as RouterPage, Routes } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import UserPage from '../screens/UserPage';
import CustomerPage from '../screens/CustomerPage';
import ProductPage from '../screens/ProductPage';
import OrderPage from '../screens/OrderPage';
import DashboardPage from '../screens/DashboardPage';
import ForgetPasswordPage from '../screens/ForgetPasswordPage';
import WelcomePage from '../screens/WelcomePage';

const Route = () => (
    <div>
        <Routes>
            <RouterPage path="/" element={<WelcomePage />} />
            <RouterPage path="/login" element={<LoginPage />} />
            <RouterPage path="/register" element={<RegisterPage />} />
            <RouterPage path="/forgetpassword" element={<ForgetPasswordPage />} />
            <RouterPage path="/user" element={<UserPage />} />
            <RouterPage path="/customer" element={<CustomerPage />} />
            <RouterPage path="/product" element={<ProductPage />} />
            <RouterPage path="/order" element={<OrderPage />} />
            <RouterPage path="/dashboard" element={<DashboardPage />} />
        </Routes>
    </div>
);

export default Route;
