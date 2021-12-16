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
import SideNav from '../layouts/sideNav';

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
            </RouterPage>
        </Routes>
    </div>
);

export default Route;
