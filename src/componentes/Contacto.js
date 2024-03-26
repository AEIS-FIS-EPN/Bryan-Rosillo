import React from "react";
import "../estilos/Contacto.css"

function Contacto(){
    return (
        <div id="contacto">
            <h1>Contacto</h1>
            <p>Si puedo ser de ayuda, puedes contactarme por los siguientes medios</p>
            <div>
                <a href="mailto:bryanrosillo100@hotmail.com"><img src={require("../recursos/outlook.png")} alt="logo de outlook"/></a>
                <a href="https://www.facebook.com/profile.php?id=100012860282061" target="_blank"><img src={require("../recursos/facebook.png")} alt="logo de facebook" /></a>
                <a href="https://wa.me/0997761333" target="_blank"><img src={require("../recursos/whatsapp.png")} alt="logo de whatsapp"/></a>    
            </div>
        </div>
    );
}

export default Contacto;