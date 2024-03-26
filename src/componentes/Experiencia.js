import React from "react";
import GrupoImagenes from "./GrupoImagenes";

function Experiencia(){
    return(
        <div id="experiencia">
            <h1>Experiencia</h1>
            <div id="grupoItems02">
                <GrupoImagenes
                    imagen01 = "cMas" descImagen01="logo del lenguaje C++"
                    imagen02 = "java" descImagen02="logo del lenguaje Java"
                    imagen03 = "php" descImagen03="logo del lenguaje php"
                    imagen04 = "sql" descImagen04="logo de SQL"
                />
                <div id="textoExperiencia">
                    <p>He tenido la oportunidad de aprender multiples tecnologías durante mi camino en mundo del software.</p>
                    <p>Puedes ver algunos de mis trabajos y participaciones en mi <a href="https://github.com/BryanRosillo" target="_blank">Git Hub</a> </p>
                    <img src={require("../recursos/gitHub.png")} alt="logo gitHub"/>
                </div>
                <GrupoImagenes
                    imagen01 = "html" descImagen01="logo de html"
                    imagen02 = "css" descImagen02="logo de css"
                    imagen03 = "javaScript" descImagen03="logo del lenguaje javaScript"
                    imagen04 = "azure" descImagen04="logo de Azure"
                />

            </div>
            
        </div>
    );
}

export default Experiencia;

