import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = true;
    const user = { loggedIn: token };
    return user && user.loggedIn;
};

const ProtectedRouterPage = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouterPage;
