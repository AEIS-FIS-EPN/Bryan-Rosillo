import React from 'react';
import "./Welcome.css";

function Welcome(){
    return(
        <div id="bienvenida">
            <img src={require("../../../utils/Cubo.gif")} alt="Animación de un cubo"/>
            <div id="mensajeBienvenida">
                <h1>--¡Hola!--</h1>
                <h2>Te doy la gracias por visitar este sitio</h2>
                <h2>Me llamo Bryan Rosillo</h2>
                <h2>Puedes descargar mi CV <a href={require("../../../utils/HojaDeVida-BryanRosillo.pdf")} target="_blank">aquí</a></h2>
            </div>
            <img src={require("../../../utils/Cubo.gif")} alt="Animación de un cubo"/>
        </div>
    );
}

export default Welcome;