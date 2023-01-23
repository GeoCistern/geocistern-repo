import React, { Component } from "react";
// import "./Header.css";

class NavButton extends Component {
    render() {
        const { linkExtension, linkText } = this.props;
        return (
            <a className='page-link' href={linkExtension}>
                {linkText}
            </a>
        );
    }
}

export default NavButton;
