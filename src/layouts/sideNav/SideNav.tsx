import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { Drawer, Typography, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import {
    Home as Dashboard,
    People as Customer,
    ShoppingBasket as Product,
    ShoppingCart as Order,
    Person as User,
} from '@mui/icons-material';

const useStyles = makeStyles({
    root: {},
    drawer: {
        width: 240,
    },
    drawerPaper: {
        width: 240,
    },
    active: {
        background: '#fff',
        color: '#000',
    },
    title: {
        color: '#8C9EBB',
        padding: 17,
    },
});

const SideNav = () => {
    const classes = useStyles();
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
        <div className={classes.root}>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: 240,
                        backgroundColor: '#0c2556',
                        color: '#fff',
                        boxSizing: 'border-box',
                    },
                }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        CRM - Devils
                    </Typography>
                </div>
                <List>
                    {menuItems.map((item) => (
                        <ListItem
                            // FIXME: Current onPage is not highlighted if add button property
                            key={item.text}
                            onClick={() => navigate(item.path)}
                            className={location.pathname === item.path ? classes.active : undefined}
                            sx={{
                                ':hover': {
                                    backgroundColor: '#ddd',
                                    opacity: 0.9,
                                    color: '#000',
                                },
                            }}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    );
};

export default SideNav;
