import React from "react";
import { useNavigate } from "react-router-dom"
import image from "../components/images/profilepic.jpg";

export default function Profile() {
    return (
        <div className="profile-title">
            <h1>Profile</h1>
            <div className="profile-screen">
                <img className="picture" style={{width: 100, height: 100}} src={image} alt="Avatar" />
                <div className="profile">
                    <h3>Logan Brown</h3>
                    <hr></hr>
                    <h3>brownl123@mcmaster.ca</h3>
                    <hr></hr>
                    <h3>brownl123</h3>
                </div>
            </div> 
            <div className="profile-bio">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
        </div>

        

        

    );
}