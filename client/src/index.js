import React from "react";
import ReactDOM from "react-dom"

import App from "./App";
import "./index.css";
import User from "./utilities/Users";


ReactDOM.render(
    <React.StrictMode>
        <User>
            <App/>
        </User>
    </React.StrictMode>,
    document.getElementById("root")
);