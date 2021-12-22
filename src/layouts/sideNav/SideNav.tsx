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
    Home as Dashboard,
    People as Customer,
    ShoppingBasket as Product,
    ShoppingCart as Order,
    Person as User,
} from '@mui/icons-material';

import styles from './SideNav.module.scss';

const SideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <Dashboard color="secondary" />,
            path: '/dashboard',
        },
        {
            text: 'Customers',
            icon: <Customer color="secondary" />,
            path: '/customer',
        },
        {
            text: 'Products',
            icon: <Product color="secondary" />,
            path: '/product',
        },
        {
            text: 'Orders',
            icon: <Order color="secondary" />,
            path: '/order',
        },
        {
            text: 'Users',
            icon: <User color="secondary" />,
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
                <div>
                    <Typography variant="h5" className={styles.title}>
                        CRM - Devils
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={location.pathname === item.path ? styles.active : undefined}
                        >
                            <ListItemButton>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default SideNav;
