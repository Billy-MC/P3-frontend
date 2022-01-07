import { Route as RouterPage, Routes } from 'react-router-dom';
import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import UserPage from '../screens/UserPage';
import CustomerPage from '../screens/CustomerPage';
import CustomerEditPage from '../screens/CustomerEditPage';
import ProductPage from '../screens/ProductPage';
import OrderPage from '../screens/OrderPage';
import DashboardPage from '../screens/DashboardPage';
import ForgotPasswordPage from '../screens/ForgotPasswordPage';
import WelcomePage from '../screens/WelcomePage';
import ProtectedRouterPage from './components';
import Layout from '../layouts';
import style from './Route.module.scss';
import AddCustomerPage from '../screens/AddCustomerPage';

const Route = () => (
    <div className={style.route}>
        <Routes>
            <RouterPage path="/" element={<WelcomePage />} />
            <RouterPage path="/login" element={<LoginPage />} />
            <RouterPage path="/register" element={<RegisterPage />} />
            <RouterPage path="/forgetpassword" element={<ForgotPasswordPage />} />
            <RouterPage element={<ProtectedRouterPage />}>
                <RouterPage
                    path="/users"
                    element={
                        <Layout>
                            <UserPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/customers"
                    element={
                        <Layout>
                            <CustomerPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/customers/edit"
                    element={
                        <Layout>
                            <CustomerEditPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/customers/add"
                    element={
                        <Layout>
                            <AddCustomerPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/products"
                    element={
                        <Layout>
                            <ProductPage />
                        </Layout>
                    }
                />
                <RouterPage
                    path="/orders"
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
