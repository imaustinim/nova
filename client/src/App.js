import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import API from "./pages/api/API"
import Auth from "./pages/auth/Auth"
import Projects from "./pages/projects/Projects"
import Users from "./pages/users/Users"
import Search from "./pages/search/Search"
import Notifications from "./pages/notifications/Notifications"
import Footer from "./components/footer/Footer"

const App = () => {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route path="/api">
                    <API/>
                </Route>
                <Route path="/auth">
                    <Auth/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/notifications">
                    <Notifications/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    )
}

export default App