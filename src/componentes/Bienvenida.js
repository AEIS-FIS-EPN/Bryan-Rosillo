import React from 'react';

function Bienvenida(){
    return(
        <div id="bienvenida">
            <img src={require("../recursos/Cubo.gif")} alt="Animación de un cubo"/>
            <div id="mensajeBienvenida">
                <h1>--¡Hola!--</h1>
                <h2>Te doy la gracias por visitar este sitio</h2>
                <h2>Me llamo Bryan Rosillo</h2>
                <h2>Puedes descargar mi CV <a href={require("../recursos/HojaDeVida-BryanRosillo.pdf")} target="_blank">aquí</a></h2>
            </div>
            <img src={require("../recursos/Cubo.gif")} alt="Animación de un cubo"/>
        </div>
    );
}

export default Bienvenida;