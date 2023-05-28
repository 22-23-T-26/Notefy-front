import React from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle, faSignOut } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <a href="/">
                    <img className="logo-notefy" src="./Logo.svg" alt="logo" />
                </a>
                <div className="h-search">
                    <input type="text" placeholder="" style={{ background: "#ffffff" }} />
                    <button className="search-button">
                        <FontAwesomeIcon icon={faSearch} style={{ color: "#84A59D" }} />
                    </button>
                </div>
                <div className="h-menu">
                    <a href="/forum" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Форум
                    </a>
                    <a href="/materials" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Материјали
                    </a>
                    <a href="/messages" style={{ color: "#84A59D", textDecoration: "none" }}>
                        Пораки
                    </a>
                    <a href="/user">
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            style={{ fontSize: "24px", color: "#84A59D" }}
                        />
                    </a>
                    <span style={{ cursor: "pointer" }} onClick={() => {
                        localStorage.removeItem("token");
                        window.location.href = "/";
                    }}>
                        <FontAwesomeIcon
                            icon={faSignOut}
                            style={{ fontSize: "24px", color: "#84A59D" }}
                        />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
