import { ReactNode, FC, Fragment } from 'react';
import SideNav from './SideNav';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        <SideNav />
        {children}
        <Footer />
    </>
);

export default Layout;
