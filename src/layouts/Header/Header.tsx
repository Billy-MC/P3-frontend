import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import styles from './Header.module.scss';

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const user = {
        Name: 'Jiang Ren',
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            className={styles['header-menu']}
            anchorEl={anchorEl}
            marginThreshold={0}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    className={(styles['header-color'], styles['header-iconsize'])}
                >
                    <AccountCircleOutlinedIcon />
                </IconButton>
                <p className={styles['header-p']}>My Profile </p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton
                    size="large"
                    aria-label="edit of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    className={(styles['header-color'], styles['header-iconsize'])}
                >
                    <EditOutlinedIcon />
                </IconButton>
                <p className={styles['header-p']}>Edit Profile</p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <IconButton
                    size="large"
                    aria-label="setting of current acount"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    className={(styles['header-color'], styles['header-iconsize'])}
                >
                    <SettingsOutlinedIcon />
                </IconButton>
                <p className={styles['header-p']}>Account Settings</p>
            </MenuItem>
            <MenuItem onClick={handleMenuClose} className={styles['header-logout']}>
                <IconButton
                    size="large"
                    aria-label="logout of current account"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    className={(styles['header-color'], styles['header-iconsize'])}
                >
                    <LogoutOutlinedIcon />
                </IconButton>
                <p className={styles['header-p']}>Logout</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box className={styles['header-box']}>
            <AppBar className={styles['header-appbar']}>
                <Toolbar className={styles['header-toolbar']}>
                    <IconButton
                        className={styles['header-iconmenu']}
                        size="large"
                        edge="start"
                        aria-label="open drawer"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className={styles['header-box2']} />
                    <Box>
                        <IconButton
                            className={styles['header-color']}
                            size="large"
                            aria-label="show 16 new notifications"
                        >
                            <Badge badgeContent={16} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            className={styles['header-btn']}
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                        >
                            <Avatar className={styles['header-avatar']}>JR</Avatar>
                            <Typography
                                className={styles['header-typography']}
                                noWrap
                                component="div"
                            >
                                {user.Name}
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMenu}
        </Box>
    );
};

export default Header;
