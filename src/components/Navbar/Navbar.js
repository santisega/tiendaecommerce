import React from "react";
import './Navbar.css';
import corazon from '../../assets/icon/Icon-color2.png';
import carrito from '../../assets/icon/shopping-cart.png';
import search from '../../assets/icon/search.png';

function Navbar () {
    return (
        <div className="container-navbar">
            <img src={search}></img>
            <input type='text' >
            </input>
            <button><img src={corazon}></img></button>
            <button><img src={carrito}></img></button>
        </div>
    )
}

export default Navbar;