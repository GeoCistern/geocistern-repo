import React, { Component } from "react";
import "./Header.css";
import Navigation from "./Navigation";

class Header extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='header'> Cistern</div>
                <Navigation></Navigation>
            </div>
        );
    }
}

export default Header;
