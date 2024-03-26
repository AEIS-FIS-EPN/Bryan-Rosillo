import React from "react";
import ContenedorSimple from "./ContenedorSimple";
import "../estilos/Estudios.css"

function Estudios(){
    return(
        <div id="estudios">
            <h1>Estudios</h1>
            <div id="grupoItems01">
                <ContenedorSimple 
                    imagen="bachiller"
                    descripcionImagen="icono de un bachiller"
                    texto="He terminado mis estudios secuandarios con un título de bachiller en ciencias generales."
                />
                <ContenedorSimple 
                    imagen="epnLogo"
                    descripcionImagen="icono de la Escuela Politécnica Nacional"
                    texto="Por el momento, estoy estudiando ingeniería en software en la Escuela Politénica Nacional."
                />
            </div>
        </div>

    );
}

export default Estudios;