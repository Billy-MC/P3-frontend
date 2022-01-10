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
import MainLayout from '../layouts/MainLayout';
import SubLayout from '../layouts/SubLayout';
import style from './Route.module.scss';
import AddCustomerPage from '../screens/AddCustomerPage';
import CustomerDetailPage from '../screens/CustomerDetailPage';

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
                        <MainLayout>
                            <UserPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/customers"
                    element={
                        <MainLayout>
                            <CustomerPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/customers/edit"
                    element={
                        <SubLayout>
                            <CustomerEditPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/customers/:id"
                    element={
                        <SubLayout>
                            <CustomerDetailPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/customers/add"
                    element={
                        <SubLayout>
                            <AddCustomerPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/products"
                    element={
                        <MainLayout>
                            <ProductPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/orders"
                    element={
                        <MainLayout>
                            <OrderPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/dashboard"
                    element={
                        <MainLayout>
                            <DashboardPage />
                        </MainLayout>
                    }
                />
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
