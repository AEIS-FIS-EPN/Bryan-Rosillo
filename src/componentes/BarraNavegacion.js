import React from "react";
import '../estilos/BarraNavegacion.css';

function BarraNavegacion() {
    return(
        <div id="parteSuperior">
            <img src={require("../recursos/iconoSuperior.png")} alt="iconoPersona" id="iconoSuperior" />
            <ul>
                <li><a href="#acercaDe">Acerca de mí</a></li>
                <li><a href="#estudios">Estudios</a></li>
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>
    );
}

export default BarraNavegacion;