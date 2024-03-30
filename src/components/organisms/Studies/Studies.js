import React from "react";
import SimpleDiv from "../../atoms//SimpleDiv/SimpleDiv";
import "./Studies.css"

function Studies(){
    return(
        <div id="estudios">
            <h1>Estudios</h1>
            <div id="grupoItems01">
                <SimpleDiv 
                    imagen="bachiller"
                    descripcionImagen="icono de un bachiller"
                    texto="He terminado mis estudios secuandarios con un título de bachiller en ciencias generales."
                />
                <SimpleDiv
                    imagen="epnLogo"
                    descripcionImagen="icono de la Escuela Politécnica Nacional"
                    texto="Por el momento, estoy estudiando ingeniería en software en la Escuela Politénica Nacional."
                />
            </div>
        </div>

    );
}

export default Studies;