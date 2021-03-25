import { useState } from 'react';
import { Link } from "react-router-dom";
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu, Button, ButtonGroup, Tab, Tabs } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import AddIcon from '@material-ui/icons/Add';

import PropTypes from 'prop-types'
import Search from '../../pages/search/Search';
import SearchFunction from "../../utilities/Search"

const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony"]

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
        position: "absolute",
        left: "50%",
        transform: "translate(-50%, 0)",
        textAlign: "center",
        justifyContent: "center",
    },
    end: {
        position: "absolute",
        right: "0",
        transform: "translate(-24px, 0)",
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

        // [theme.breakpoints.up('md')]: {
            // marginRight: theme.spacing(7),
        // },
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
            width: '320px',
        },
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('md')]: {
            width: '480px',
        },
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em)`,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        position: "absolute",
        right: "0",
        transform: "translate(12px, 0)",
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));
  
const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  
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

    const [search, setSearch] = useState("");
    const filteredResults = names.filter( name => {
        return name.toLowerCase().includes(search.toLowerCase());
    })

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            getContentAnchorEl={null}
        >
            <Link to="/users">
                <MenuItem onClick={handleMenuClose}>
                    Profile
                </MenuItem>
            </Link>
            <Link to="/settings">
                <MenuItem onClick={handleMenuClose}>
                    Settings    
                </MenuItem>
            </Link>
            <Link to="/auth/login">
                <MenuItem onClick={handleMenuClose}>
                    Login                
                </MenuItem>
            </Link>
            <Link to="/auth/logout">
                <MenuItem onClick={handleMenuClose}>
                    Logout                
                </MenuItem>
            </Link>
        </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            getContentAnchorEl={null}
        >
            <MenuItem>
                <Link to="/projects/create">
                    <IconButton color="inherit">
                        <Badge color="secondary">
                            <AddIcon/>
                        </Badge>
                    </IconButton>
                    <p>Create</p>
                </Link>
            </MenuItem>
            <MenuItem>
                <Link to="/notifications">
                    <IconButton aria-label="show 11 new notifications" color="inherit">
                        <Badge color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <p>Notifications</p>
                </Link>
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
                            <Link to="/">
                                <Typography className={classes.title} variant="h6" noWrap>
                                    NOVA-LOGO
                                </Typography>
                            </Link>
                        </div>
                        <div className={classes.center}>
                            <form action="/search" method="POST">
                                <ButtonGroup disableElevation className={classes.searchButton}>
                                    <InputBase 
                                        placeholder="Search"
                                        classes={{root: classes.inputRoot, input: classes.inputInput, }}
                                        inputProps={{ 'aria-label': 'search' }}
                                        onChange={e => setSearch(e.target.value)}
                                    />
                                    <Button type="submit" className={classes.searchIcon}>
                                        <SearchIcon/>
                                    </Button>
                                </ButtonGroup>
                            </form>
                        </div>
                        <div className={classes.end}>
                            <div className={classes.grow}></div>
                            <div className={classes.sectionDesktop}>
                                <IconButton color="inherit">
                                    <Badge color="secondary">
                                        <Link to="/projects">
                                            <AddIcon/>
                                        </Link>
                                    </Badge>
                                </IconButton>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={5} color="secondary">
                                        <Link to="/notifications">
                                            <NotificationsIcon/>
                                        </Link>
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
                {/* {filteredResults.map((names) => (
                    names
                ))} */}
            </div>
        );
    }

  export default Header