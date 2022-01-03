import * as React from 'react';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Divider,
} from '@mui/material';

import {
    HomeOutlined as Dashboard,
    PeopleOutlined as Customer,
    ShoppingBasketOutlined as Product,
    ShoppingCartOutlined as Order,
    PersonOutlined as User,
} from '@mui/icons-material';

import styles from './SideNav.module.scss';

const SideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <Dashboard className={styles.listItemIcon} />,
            path: '/dashboard',
        },
        {
            text: 'Customers',
            icon: <Customer className={styles.listItemIcon} />,
            path: '/customer',
        },
        {
            text: 'Products',
            icon: <Product className={styles.listItemIcon} />,
            path: '/product',
        },
        {
            text: 'Orders',
            icon: <Order className={styles.listItemIcon} />,
            path: '/order',
        },
        {
            text: 'Users',
            icon: <User className={styles.listItemIcon} />,
            path: '/user',
        },
    ];

    return (
        <div className={styles.sideNav}>
            <Drawer
                className={styles['sideNav-drawer']}
                variant="permanent"
                anchor="left"
                classes={{ paper: styles['sideNav-drawerPaper'] }}
            >
                <div className={styles['sideNav-header']}>
                    <NavLink to="/" className={styles['sideNav-header-link']}>
                        <div className={styles['sideNav-header-logo']}>
                            <p>logo</p>
                        </div>
                    </NavLink>
                    <Typography variant="h5" className={styles['sideNav-header-title']}>
                        Devils
                    </Typography>
                </div>
                <Divider className={styles['sideNav-divider']} />
                <div className={styles['sideNav-menu']}>
                    <List>
                        {menuItems.map((item) => (
                            <ListItem>
                                <ListItemButton
                                    key={item.text}
                                    onClick={() => navigate(item.path)}
                                    className={
                                        location.pathname === item.path ? styles.active : undefined
                                    }
                                >
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText
                                        primary={item.text}
                                        className={styles['sideNav-menu-text']}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
};

export default SideNav;
