import React, { Component } from "react";

class NavBar extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/events">
                                    Event Log
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/friends">
                                    Friends
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/profile">
                                    Profile
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default NavBar;
