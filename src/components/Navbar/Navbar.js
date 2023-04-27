import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="h-wrapper">
            <div className="h-container">
                <img className="logo-notefy" src="./logo.png" alt="logo" width={100}/>
                <div className="h-search">
                    {/* Add your search bar component here */}
                    <input type="text" placeholder="" />
                </div>
                <div className="h-menu">
                    <a href="">Материјали</a>
                    <a href="">Профил</a>
                </div>
            </div>
        </section>
    )
}

export default Navbar;
