import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <a href="/">
                    <img className="logo-notefy" src="./logo2.png" alt="logo" width={100} />
                </a>
                <div className="h-search">
                    <input type="text" placeholder="" style={{background: "#ffffff"}}/>
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} style={{color: "#84A59D"}}/>
                    </button>
                </div>
                <div className="h-menu">
                    <a href="/forum" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Форум
                    </a>
                    <a href="/materials" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Материјали
                    </a>
                    <a href="" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Пораки
                    </a>
                    <a href="/user">
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            style={{ fontSize: "24px", color: "#84A59D" }}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
