import React from "react";
import { useNavigate } from "react-router-dom"
import image from "../components/images/profilepic.jpg";

export default function Profile() {
    return (
        <>
            <img src={image} alt="Avatar" />
            <h1>Profile</h1>
            <h3>Logan Brown</h3>
            <h3>brownl33@mcmaster.ca</h3>
            <h3>brown123</h3>
        </> 
        

        

    );
}