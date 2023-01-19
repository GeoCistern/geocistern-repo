import { navData } from "./Navigation";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
    const [active, setActive] = useState(true);
    const toggleActive = () => {
        setActive(!active);
    };
    return (
        <div className='navBar-container'>
            {navData.map((item) => {
                return (
                    <NavLink
                        key={item.id}
                        className='sideItem'
                        to={item.link}
                        onClick={toggleActive}
                    >
                        {item.icon}
                        <span className='linkText'>{item.text}</span>
                    </NavLink>
                );
            })}
        </div>
    );
}
