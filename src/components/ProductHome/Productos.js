import React from "react";
import './Productos.css'
import zapas from '../../assets/img/Rectangle 4.png';
import zapas1 from '../../assets/img/Rectangle 1.png';
import zapas2 from '../../assets/img/Rectangle 2.png';
import zapas3 from '../../assets/img/Rectangle 3.png';
import zapas4 from '../../assets/img/Rectangle 5.png';
import zapas5 from '../../assets/img/Rectangle 6.png';
import zapas6 from '../../assets/img/Rectangle 7.png';

const imagenes = [
    zapas, 
    zapas1, 
    zapas2, 
    zapas3, 
    zapas4, 
    zapas5,
    zapas6,
]//Tenian que ir sin llaves mano



function Productos () {

    const img =  imagenes.map(img => {
    return <button className="imagenProducto"><img src={img}></img></button>
    })
    return (
        <div className="containerImagen">
            {img}
        </div>
    )
}

export default Productos; 