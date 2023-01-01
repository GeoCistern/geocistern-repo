import React, { Component } from "react";
import "./Header.css";
import NavButton from "./NavButton";

class Navigation extends Component {
    render() {
        return (
            <nav className='site-nav'>
                <div className='trigger'>
                    <NavButton
                        linkText='hello'
                        linkExtension='https://www.utoronto.ca/'
                    />
                    <NavButton
                        linkText='Previous Cistern'
                        linkExtension='https://geocistern.github.io/database/'
                    />
                    <NavButton
                        linkText='MakeSchool'
                        linkExtension='https://makeschool.org/mediabook/oa/tutorials/react-fundamentals-vm0/build-a-header-component/'
                    />
                </div>
            </nav>
        );
    }
}

export default Navigation;
