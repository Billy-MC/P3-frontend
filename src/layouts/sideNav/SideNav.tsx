import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Home, People, ShoppingBasket, ShoppingCart, Person } from '@mui/icons-material';

const SideNav = () => {
    const navigate = useNavigate();

    const menuItems = [
        {
            text: 'Dashboard',
            icon: <Home color="secondary" />,
            path: '/dashboard',
        },
        {
            text: 'Customers',
            icon: <People color="secondary" />,
            path: '/customer',
        },
        {
            text: 'Products',
            icon: <ShoppingBasket color="secondary" />,
            path: '/product',
        },
        {
            text: 'Orders',
            icon: <ShoppingCart color="secondary" />,
            path: '/order',
        },
        {
            text: 'Users',
            icon: <Person color="secondary" />,
            path: '/user',
        },
    ];

    return (
        <div>
            <Drawer variant="permanent" anchor="left">
                <div>
                    <Typography variant="h5">CRM -Devils</Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem button key={item.text} onClick={() => navigate(item.path)}>
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
