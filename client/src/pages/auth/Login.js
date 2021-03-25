import { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from 'react-facebook-login';

import { responseGoogle, responseFacebook } from "../../utilities/Authentication"


import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Card, AppBar, Tabs, Tab, Typography, Box, TextField, InputAdornment, IconButton, Button } from "@material-ui/core"
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ImFacebook } from "react-icons/im";


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
  
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
  
const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(2),
    },
    appbar: {
        padding: theme.spacing(1),
    },
    tab: {
        flexGrow: 1,
    },
    tabpanel: {
        textAlign: "center"
    },
    title: {
        margin: theme.spacing(2, 0, 2, 0)
    },
    subtitle: {
        margin: theme.spacing(1, 0, 1, 0)
    },
    form: {
        // margin: theme.spacing(2, 0, 0, 0)
    },
    textField: {
        margin: theme.spacing(.5),
        width: "320px",
        borders: "none",
    },
    icon: {
        color: "slategrey",
    },
    button: {
        width: "24px",
        height: "100%",
    },
    submitButton: {
        padding: theme.spacing(1, 2, 1, 2),
        margin: theme.spacing(2, 0, 0, 0)
    }, 
}));
  
const Login = () => {
    const classes = useStyles();
    const [values, setValues] = useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });
    const [value, setValue] = useState(0);

    const handleChangeTabs= (e, newValue) => {
      setValue(newValue);
    };

    const handleChangePassword = (prop) => (e) => {
        setValues({ ...values, [prop]: e.target.value });
      };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleButton = (e, link) => {
        e.preventDefault();

    }
  
    return (
        <Container maxWidth="sm" className={classes.container}>
            <Card className={classes.card}>
                <AppBar position="static" className={classes.appbar}>
                    <Tabs value={value} onChange={handleChangeTabs} indicatorColor="secondary" classes={classes.tabs} centered>
                        <Tab label="Sign Up" {...a11yProps(0)} className={classes.tab}/>
                        <Tab label="Sign In" {...a11yProps(1)} className={classes.tab}/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className={classes.tabpanel}>
                    <Typography variant="h4" className={classes.title}>Create Account!</Typography>
                        <IconButton aria-label="google" onSubmit={handleButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16" className={classes.button}>
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                            </svg>
                        </IconButton>
                        <IconButton aria-label="facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" className={classes.button}>
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                        </IconButton>
                        <IconButton aria-label="linkedin">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16" className={classes.button}>
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                        </IconButton>
                    <Typography variant="subtitle2" className={classes.subtitle}>Or use your email for registration.</Typography>
                    <form action="" className={classes.form}>
                        <TextField
                            className={classes.textField}
                            id="outlined-adornment-email"
                            placeholder="Email"
                            autoComplete="current-email"
                            variant="outlined"
                            InputProps= {{
                                startAdornment:
                                <InputAdornment position="start">
                                    <MailOutlineIcon className={classes.icon}/>
                                </InputAdornment>
                            }}
                        />
                        <TextField
                            className={classes.textField}
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword('password')}
                            placeholder="Password"
                            autoComplete="current-password"
                            variant="outlined"
                            InputProps= {{
                                startAdornment:
                                <InputAdornment position="start">
                                    <LockOpenIcon className={classes.icon}/>
                                </InputAdornment>,
                                endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <div>
                            <Button disableElevation variant="contained" color="primary" href="#contained-buttons" size="large" className={classes.submitButton}>
                                Sign Up
                            </Button>
                        </div>
                        {/* <div>
                            <GoogleLogin
                            clientId="403008712945-mkh3mjhu1v16jns6m15t8q8rlat3io1n.apps.googleusercontent.com"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={"single_host_origin"}
                            />
                        </div>
                        <div>
                            <FacebookLogin
                            // textButton="hi"
                            icon={<ImFacebook />}
                            appId="138666561488354"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            />
                        </div> */}
                    </form>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.tabpanel}>
                    <Typography variant="h4">Welcome Back!</Typography>
                    <Typography variant="subtitle1">Sign into your Nova account.</Typography>
                    <form action="" className={classes.form}>
                        <TextField
                        className={classes.textField}
                        id="outlined-adornment-email"
                        placeholder="Email"
                        autoComplete="current-email"
                        variant="outlined"
                        InputProps= {{
                            startAdornment:
                            <InputAdornment position="start">
                                <MailOutlineIcon className={classes.icon}/>
                            </InputAdornment>
                        }}
                        />
                        <TextField
                            className={classes.textField}
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            onChange={handleChangePassword('password')}
                            placeholder="Password"
                            autoComplete="current-password"
                            variant="outlined"
                            InputProps= {{
                                startAdornment:
                                <InputAdornment position="start">
                                    <LockOpenIcon className={classes.icon}/>
                                </InputAdornment>,
                                endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }}
                        />
                        <div>
                            <Button disableElevation variant="contained" color="primary" href="#contained-buttons" size="large" className={classes.submitButton}>
                                Sign Up
                            </Button>
                        </div>
                    </form>
                    
                </TabPanel>
            </Card>
        </Container>
    );
  }

export default Login

