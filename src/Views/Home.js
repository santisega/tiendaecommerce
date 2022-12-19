import React from "react";
import Navbar from "../components/Navbar/Navbar";
import './home.css';
import Productos from "../components/ProductHome/Productos";

function Home () {
    return(
        <div className="home">
            <Navbar></Navbar>
            <Productos></Productos>
        </div>
    );
}

export default Home;
