import React from "react";

function GroupImages(props){
    return(
        <div className="tecnologias">
            <img src={require(`../../../utils/${props.imagen01}.png`)} alt={props.descImagen01}/>
            <img src={require(`../../../utils/${props.imagen02}.png`)} alt={props.descImagen02}/>
            <img src={require(`../../../utils/${props.imagen03}.png`)} alt={props.descImagen03}/>
            <img src={require(`../../../utils/${props.imagen04}.png`)} alt={props.descImagen04}/>
        </div>
    );
}

export default GroupImages;