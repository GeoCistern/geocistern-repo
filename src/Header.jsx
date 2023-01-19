import React, { Component } from "react";
import "./Header.css";
import NavBar from "./NavBar";

class Header extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='header'>Cistern</div>
                <NavBar />
            </div>
        );
    }
}

export default Header;
