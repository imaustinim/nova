import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
import { blueGrey, grey, indigo } from "@material-ui/core/colors";

import Header from "./components/header/Header"
import Home from "./pages/home/Home"
import API from "./pages/api/API"
import Auth from "./pages/auth/Auth"
import Projects from "./pages/projects/Projects"
import Users from "./pages/users/Users"
import Search from "./pages/search/Search"
import Notifications from "./pages/notifications/Notifications"
import Footer from "./components/footer/Footer"

const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2034B9"
      },
      secondary: {
        main: "#FFCD0B"
      }
    }
  });

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/api" component={API} />
                    <Route path="/auth" component={Auth}/>
                    <Route path="/projects" component= {Projects}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/notifications" component={Notifications}/>
                    <Route path="/" component={Home}/>
                </Switch>
                <Footer/>
            </Router>
        </ThemeProvider>
    )
}

export default App