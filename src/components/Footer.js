import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (

        <footer id="footer">
            <div className="center">
                <p>
                    &copy; Made in Venezuela
                    <FontAwesomeIcon className="icon_footer" icon={faHeart} />


                </p>
            </div>
        </footer>
    );
}

export default Footer;