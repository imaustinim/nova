import React, { useEffect } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getUsers } from "./actions/users"


import testImage from "./images/frank-ocean-blond_sq-39d3ea0f3d905cd9c9674e7ebfb68ffcc4dbb441.jpeg"
import Project from "./components/projects/project"
import Users from "./components/users/users"
import Styles from "./styles";

const App = () => {
    const classes = Styles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Test</Typography>
                <img className={classes.image} src={testImage} alt="hi" height="60"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Project />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Users />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App