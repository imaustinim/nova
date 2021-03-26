import React, { createContext, useState, useEffect } from "react";
const context = createContext(null);

export function Google(self) {
    window.open("http://localhost:5000/auth/google", self);
}

export const Facebook = (response) => {
    console.log(response);
    console.log(response.profile);
}