import { lazy } from 'react';
import { Route as RouterPage, Routes } from 'react-router-dom';
import ProtectedRouterPage from './components';
import MainLayout from '../layouts/MainLayout';
import SubLayout from '../layouts/SubLayout';
import ProductDetailPage from '../screens/ProductDetailPage';

const WelcomePage = lazy(() => import('../screens/WelcomePage'));
const LoginPage = lazy(() => import('../screens/LoginPage'));
const RegisterPage = lazy(() => import('../screens/RegisterPage'));
const ForgotPasswordPage = lazy(() => import('../screens/ForgotPasswordPage'));
const DashboardPage = lazy(() => import('../screens/DashboardPage'));
const UserPage = lazy(() => import('../screens/UserPage'));
const CustomerPage = lazy(() => import('../screens/CustomerPage'));
const CustomerDetailPage = lazy(() => import('../screens/CustomerDetailPage'));
const CustomerEditPage = lazy(() => import('../screens/CustomerEditPage'));
const AddCustomerPage = lazy(() => import('../screens/AddCustomerPage'));
const ProductPage = lazy(() => import('../screens/ProductPage'));
const ProductEditPage = lazy(() => import('../screens/ProductEditPage'));
const AddProductPage = lazy(() => import('../screens/AddProductPage'));
const OrderPage = lazy(() => import('../screens/OrderPage'));

const Route = () => (
    <div className="route">
        <Routes>
            <RouterPage path="/" element={<WelcomePage />} />
            <RouterPage path="/login" element={<LoginPage />} />
            <RouterPage path="/register" element={<RegisterPage />} />
            <RouterPage path="/forgetpassword" element={<ForgotPasswordPage />} />
            <RouterPage element={<ProtectedRouterPage />}>
                <RouterPage
                    path="/dashboard"
                    element={
                        <MainLayout>
                            <DashboardPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/users"
                    element={
                        <MainLayout>
                            <UserPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/customers/*"
                    element={
                        <MainLayout>
                            <CustomerPage />
                        </MainLayout>
                    }
                />
                <RouterPage
                    path="/customers/:email"
                    element={
                        <SubLayout>
                            <CustomerDetailPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/customers/:email/edit"
                    element={
                        <SubLayout>
                            <CustomerEditPage />
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
                    path="/products/add"
                    element={
                        <SubLayout>
                            <AddProductPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/products/:sku"
                    element={
                        <SubLayout>
                            <ProductDetailPage />
                        </SubLayout>
                    }
                />
                <RouterPage
                    path="/products/:sku/edit"
                    element={
                        <SubLayout>
                            <ProductEditPage />
                        </SubLayout>
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
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
