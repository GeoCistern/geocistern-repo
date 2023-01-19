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
                    <NavButton linkText='People' linkExtension='/People' />
                </div>
            </nav>
        );
    }
}

export default Navigation;

export const navData = [
    {
        id: 0,
        // icon: <HomeIcon />,
        text: "Home",
        link: "/",
    },
    {
        id: 1,
        // icon: <TravelExploreIcon />,
        text: "Explore",
        link: "explore",
    },
    {
        id: 2,
        // icon: <BarChartIcon />,
        text: "Statistics",
        link: "statistics",
    },
    {
        id: 3,
        // icon: <SettingsIcon />,
        text: "People",
        link: "People",
    },
];
