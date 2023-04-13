import React from "react";
import './style.css';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <Link to={"/"}>Home</Link>
            <Link to={"/reviews"}>Reviews</Link>
            <Link to={"/Articles"}>Articles</Link>
            <Link to={"/Movies"}>Movies</Link>
        </nav>
    )
}

export default Menu;