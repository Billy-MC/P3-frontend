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
import ProtectedRouterPage from './components';
import Layout from '../layouts';

const Route = () => (
    <div>
        <Routes>
            <RouterPage path="/" element={<WelcomePage />} />
            <RouterPage path="/login" element={<LoginPage />} />
            <RouterPage path="/register" element={<RegisterPage />} />
            <RouterPage path="/forgetpassword" element={<ForgetPasswordPage />} />
            <RouterPage element={<ProtectedRouterPage />}>
                <RouterPage
                    path="/user"
                    element={
                        <UserPage>
                            <Layout />
                        </UserPage>
                    }
                />
                <RouterPage
                    path="/customer"
                    element={
                        <CustomerPage>
                            <Layout />
                        </CustomerPage>
                    }
                />
                <RouterPage
                    path="/product"
                    element={
                        <ProductPage>
                            <Layout />
                        </ProductPage>
                    }
                />
                <RouterPage
                    path="/order"
                    element={
                        <OrderPage>
                            <Layout />
                        </OrderPage>
                    }
                />
                <RouterPage
                    path="/dashboard"
                    element={
                        <DashboardPage>
                            <Layout />
                        </DashboardPage>
                    }
                />
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
