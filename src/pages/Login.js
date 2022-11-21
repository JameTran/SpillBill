import React from "react";

import { useNavigate } from "react-router-dom"

export default function Login() {
    
    const navigate = useNavigate();

    return (
        <>
        <form>
            <label for="username">Username</label>
            <input type="email" placeholder="Enter your email" id="email" name="email" />
            <label for="password">Password</label>
            <input type="password" placeholder="Enter your password" id="password=" name="email" />
            <button> Log In</button>
            <label for="remember">Remember me</label>
            <input type="checkbox" id="remember" name="remember" />

        </form>
        <button type="button" onClick={() =>navigate("/signup")}> Don't have an account? Register</button>
        </>
    );
}