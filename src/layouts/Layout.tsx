import { ReactNode, FC, Fragment } from 'react';
import SideNav from './SideNav';
import Header from './Header';
import styles from './Layout.module.scss';

type LayoutProps = {
    children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => (
    <>
        <Header />
        <SideNav />
        <div className={styles.main}>{children}</div>
    </>
);

export default Layout;
