import React from "react";

function GrupoImagenes(props){
    return(
        <div className="tecnologias">
            <img src={require(`../recursos/${props.imagen01}.png`)} alt={props.descImagen01}/>
            <img src={require(`../recursos/${props.imagen02}.png`)} alt={props.descImagen02}/>
            <img src={require(`../recursos/${props.imagen03}.png`)} alt={props.descImagen03}/>
            <img src={require(`../recursos/${props.imagen04}.png`)} alt={props.descImagen04}/>
        </div>
    );
}

export default GrupoImagenes;