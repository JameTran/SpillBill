import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navBar";
import AddItem from "./components/addItem";

class App extends Component {
    state = {
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
    };

    handleGoBack = items => {
        console.log(items);
    }

    render() {
        return (
            <React.StrictMode>
                <AddItem splitMethods={this.state.splitMethods} friendsList={this.state.friendsList} items={this.state.items} goBack={this.handleGoBack}/>
                <NavBar />
            </React.StrictMode>
        );
    }
}

export default App;
