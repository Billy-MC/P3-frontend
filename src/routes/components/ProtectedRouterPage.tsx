import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const token = false;
    const user = { loggedIn: token };
    console.log(user);
    return user && user.loggedIn;
};

const ProtectedRouterPage = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRouterPage;
