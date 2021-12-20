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
<<<<<<< HEAD
import Layout from '../layouts';
||||||| d2f404b
=======
import SideNav from '../layouts/sideNav';
>>>>>>> 3fa3128a1a4dd3d61045a7a18e9c6f46a84251b6

const Route = () => (
    <div>
        <Routes>
            <RouterPage path="/" element={<WelcomePage />} />
            <RouterPage path="/login" element={<LoginPage />} />
            <RouterPage path="/register" element={<RegisterPage />} />
            <RouterPage path="/forgetpassword" element={<ForgetPasswordPage />} />
            <RouterPage element={<ProtectedRouterPage />}>
<<<<<<< HEAD
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
||||||| d2f404b
                <RouterPage path="/user" element={<UserPage />} />
                <RouterPage path="/customer" element={<CustomerPage />} />
                <RouterPage path="/product" element={<ProductPage />} />
                <RouterPage path="/order" element={<OrderPage />} />
                <RouterPage path="/dashboard" element={<DashboardPage />} />
=======
                <RouterPage
                    path="/user"
                    element={
                        <UserPage>
                            <SideNav />
                        </UserPage>
                    }
                />
                <RouterPage
                    path="/customer"
                    element={
                        <CustomerPage>
                            <SideNav />
                        </CustomerPage>
                    }
                />
                <RouterPage
                    path="/product"
                    element={
                        <ProductPage>
                            <SideNav />
                        </ProductPage>
                    }
                />
                <RouterPage
                    path="/order"
                    element={
                        <OrderPage>
                            <SideNav />
                        </OrderPage>
                    }
                />
                <RouterPage
                    path="/dashboard"
                    element={
                        <DashboardPage>
                            <SideNav />
                        </DashboardPage>
                    }
                />
>>>>>>> 3fa3128a1a4dd3d61045a7a18e9c6f46a84251b6
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
