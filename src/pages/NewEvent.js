import React, { Component } from "react";
import { useNavigate } from "react-router-dom"
import "../App.css";
import NavBar from "../components/navBar";
import AddItem from "../components/addItem";

export default function NewEvent() {
    const state = {
        friendsList: ["Ayman", "Harsh", "Jame", "Logan", "Syed"],
        splitMethods: [
            {
                id: "even",
                name: "Evenly",
                description: "All the added friends will split the bill evenly",
            },
            {
                id: "dutch",
                name: "Going Dutch",
                description: "Every participant covers their own expense",
            },
            {
                id: "settled",
                name: "Already Settled",
                description: "This bill is already settled",
            },
        ],
        items:[],
    }

    const navigate = useNavigate();

    const handleGoBack = (items) => {
        console.log(items)
        navigate("/Events")
    }

    return (
        <React.StrictMode>
            <AddItem splitMethods={this.state.splitMethods} friendsList={this.state.friendsList} items={this.state.items} goBack={this.handleGoBack}/>
            <NavBar />
        </React.StrictMode>
    );
}


