import React from "react";
import "./Popup.css";

const Popup = (props) => {
    // const handleKeyPress = document.addEventListener("keyup", function (e) {
    //     if (e.key === "Escape") {
    //         // hide modal code
    //         props.handleClose;
    //     }
    // });
    return (
        <div className='popup-box'>
            <div className='box'>
                <span className='close-icon' onClick={props.handleClose}>
                    x
                </span>
                {props.content}
            </div>
        </div>
    );
};

export default Popup;
