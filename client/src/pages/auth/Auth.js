import { BrowserRouter as Switch, Route } from "react-router-dom";
import Login from "./Login"
import Logout from "./Logout"


const Auth = () => {
    return (
        <Switch>
            <Route path="/auth/login" component={Login}/>
            <Route path="/auth/logout" component={Logout}/>
        </Switch>
    )
}

export default Auth