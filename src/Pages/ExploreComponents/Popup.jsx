import React from "react";

const Popup = (props) => {
    // const handleKeyPress = document.addEventListener("keyup", function (e) {
    //     if (e.key === "Escape") {
    //         // hide modal code
    //         props.handleClose;
    //     }
    // });
    return (
        <dialog open>
            <article>
                <header>
                    <a
                        href='#close'
                        aria-label='Close'
                        class='close'
                        onClick={props.handleClose}
                    ></a>
                    More info
                </header>
                {props.content}
            </article>
        </dialog>
    );
};

export default Popup;
