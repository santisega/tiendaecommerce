import React from "react";
import zapas from '../../assets/img/Rectangle 4.png';
import zapas1 from '../../assets/img/Rectangle 1.png';
import zapas2 from '../../assets/img/Rectangle 2.png';
import zapas3 from '../../assets/img/Rectangle 3.png';
import zapas4 from '../../assets/img/Rectangle 5.png';
import zapas5 from '../../assets/img/Rectangle 6.png';
import zapas6 from '../../assets/img/Rectangle 7.png';

const imagenes = [
    {zapas}, 
    {zapas1}, 
    {zapas2}, 
    {zapas3}, 
    {zapas4}, 
    {zapas5},
    {zapas6},
]



function Productos () {

    const img =  imagenes.map(img => {
    <img src={img}></img>
    })
    return (
        <div>
            {img}
        </div>
    )
}

export default Productos; 