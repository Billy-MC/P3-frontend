import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
    Drawer,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemButton,
} from '@mui/material';

import {
    HomeOutlined as Dashboard,
    CloseOutlined as Close,
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
            icon: <Dashboard style={{ fill: '#8f9fbc' }} />,
            path: '/dashboard',
        },
        {
            text: 'Customers',
            icon: <Customer style={{ fill: '#8f9fbc' }} />,
            path: '/customer',
        },
        {
            text: 'Products',
            icon: <Product style={{ fill: '#8f9fbc' }} />,
            path: '/product',
        },
        {
            text: 'Orders',
            icon: <Order style={{ fill: '#8f9fbc' }} />,
            path: '/order',
        },
        {
            text: 'Users',
            icon: <User style={{ fill: '#8f9fbc' }} />,
            path: '/user',
        },
    ];

    return (
        <div className={styles.sideNav}>
            <Drawer
                className={styles.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: styles.drawerPaper }}
            >
                <div className={styles.sidebarHeader}>
                    <div className={styles.sidebarLogo}>
                        <p>logo</p>
                    </div>
                    <Typography variant="h5" className={styles.sidebarTitle}>
                        Devils
                    </Typography>
                    <div className={styles.sidebarClose}>
                        <Close />
                    </div>
                </div>
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
                                <ListItemText primary={item.text} className={styles.listItemText} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default SideNav;
