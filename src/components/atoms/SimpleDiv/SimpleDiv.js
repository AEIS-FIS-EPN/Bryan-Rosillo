import React from "react";

function SimpleDiv(props){
    return(
        <div>
            <img src={require(`../../../utils/${props.imagen}.png`)} alt={props.descripcionImagen}/>
            <p>{props.texto}</p>
        </div>

    );

}

export default SimpleDiv;

