import React from "react";
import { useSelector } from "react-redux";

import User from "./user"

const Users = () => {
    const users = useSelector((state) => state.users)

    console.log(users)
    return (
        <>
            <h1>User</h1>
            <User />
            <User />
        </>
    );
}

export default Users;