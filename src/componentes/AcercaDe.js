import React from "react";
import "../estilos/AcercaDe.css"

function AcercaDe(){
    return(
        <div id="acercaDe">
            <div id="mensajeAcercaDe">
                <h1 className="titulo">Acerca de mí</h1>
                <p> Me dedico a la ingeniería de software.
                    Es decir, me encanta todo lo que tenga que ver con ello, desde su diseño,
                    pasando por su elaboración, hasta su mantenimiento.
                </p>
                <p>
                    Por otro lado, también me suele interesar el dibujo, la pintura y la fotografía. Además, adoro mucho el rock alternativo-indie, siento que puedo escucharlo todo el tiempo.
                </p>
                <p>
                    Respecto a mis comportamientos...
                    Suelo ser medianamente perfeccionista. Quiero decir, tiendo a que las cosas que hago sean lo más correctas posibles, y que todo tenga que cuadrar como debe ser. 
                    Y otra cosa, quizá no tan buena, es que no hablo mucho, la timidez me suele ganar.
                </p>
            </div>
            
            <img src={require("../recursos/fotoPersonal.jpg")} alt="imagen personal" id="imagenPersonal"/>

            <div id="fotosAcercaDe">
                <img src={require("../recursos/foto01.jpg")} alt="foto de un lindo paisaje" id="imagen01"/>
                <img src={require("../recursos/fotoTK.png")} alt="foto del mejor albúm del mundo" id="imagenTK"/>
            </div>

        </div>

    );
}

export default AcercaDe;