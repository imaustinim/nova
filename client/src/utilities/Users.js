import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext({});
export default function GetUser(props) {
    const [userObject, setuserObject] = useState();
    useEffect(() => {
        const url = "http://localhost:5000/api/users/getuser"
        const options = { 
            withCredentials: true,
        }
        fetch(url, options).then((res) => {
            console.log(res)
            if (res.data) {
                setuserObject(res.data);
            }
        })
    }, [])
    return (
        <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
    )
}