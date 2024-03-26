import React from "react";

function ContenedorSimple(props){
    return(
        <div>
            <img src={require(`../recursos/${props.imagen}.png`)} alt={props.descripcionImagen}/>
            <p>{props.texto}</p>
        </div>

    );

}

export default ContenedorSimple;

