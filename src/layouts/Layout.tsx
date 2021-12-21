import { ReactNode, FC, Fragment } from 'react';
import SideNav from './SideNav';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <SideNav />
        {children}
    </>
);

export default Layout;
