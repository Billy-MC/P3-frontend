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
                        <Layout>
                            <UserPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/customer"
                    element={
                        <Layout>
                            <CustomerPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/product"
                    element={
                        <Layout>
                            <ProductPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/order"
                    element={
                        <Layout>
                            <OrderPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/dashboard"
                    element={
                        <Layout>
                            <DashboardPage />
                        </Layout>
                    }
                />
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
