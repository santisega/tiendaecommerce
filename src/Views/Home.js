import React from "react";
import Navbar from "../components/Navbar/Navbar";
import './home.css';
import Productos from "../components/ProductHome/Productos";

function Home () {
    return(
        <div className="home">
            <Navbar></Navbar>
            <Productos></Productos>
                <div>
                    <p>Hola</p>
                </div>
        </div>
    );
}

export default Home;
