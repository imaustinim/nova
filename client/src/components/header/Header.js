import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Button, ButtonGroup, Tab, Tabs } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types'
import Link from "./Links"

const useStyles = makeStyles((theme) => ({
    start: {
        flexDirection: "row",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        float: "left"
    },
    center: {
        marginLeft: "auto",
        marginRight: "auto",
    },
    end: {
        flexDirection: "row",
        justifyContent: "flex-end",
        display: "flex",
        alignItems: "center",
        float: "right"
    },
    grow: {
        flexGrow: 1,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
    searchButton: {
        borderRadius: theme.shape.borderRadius,
        width: '100%',
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(7),
        },
    },
    searchIcon: {
        border: 0,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'inherit',
        backgroundColor: fade(theme.palette.common.white, 0.10),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.2),
        },
    },
    inputRoot: {
        color: 'inherit',
        backgroundColor: fade(theme.palette.common.white, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.1),
        },
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '360px',
        },
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '480px',
        },
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('lg')]: {
            width: '480px',
        },


    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em)`,
        // transition: theme.transitions.create('width'),
        // width: '100%',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex', 
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));
  
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
            <IconButton color="inherit">
                <Badge color="secondary">
                <AddIcon/>
                </Badge>
            </IconButton>
            <p>Messages</p>
            </MenuItem>
            <MenuItem>
            <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
                </Badge>
            </IconButton>
            <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <p>Profile</p>
            </MenuItem>
        </Menu>
        );

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={classes.start}>
                            <IconButton edge="start" color="inherit" aria-label="open drawer">
                                <MenuIcon/>
                            </IconButton>
                            <a href="" >
                                <Typography className={classes.title} variant="h6" noWrap>
                                    NOVA-LOGO
                                </Typography>
                            </a>
                        </div>
                        <div className={classes.center}>
                            <ButtonGroup disableElevation className={classes.searchButton}>
                                <InputBase placeholder="Search" classes={{root: classes.inputRoot, input: classes.inputInput, }} inputProps={{ 'aria-label': 'search' }} />
                                <Button className={classes.searchIcon}>
                                    <SearchIcon/>
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className={classes.end}>
                            <div className={classes.grow}></div>
                            <div className={classes.sectionDesktop}>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <AddIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={5} color="secondary">
                                        <NotificationsIcon/>
                                    </Badge>
                                </IconButton>
                                <IconButton edge="end" aria-label="account of current user" aria-controls={menuId} aria-haspopup="true" onClick={handleProfileMenuOpen} color="inherit">
                                    <AccountCircle/>
                                </IconButton>
                            </div>
                            <div className={classes.sectionMobile}>
                                <IconButton aria-label="show more" aria-controls={mobileMenuId} aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                                    <MoreIcon/>
                                </IconButton>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </div>
        );
    }

  export default Header