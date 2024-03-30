import React from "react";
import "./Contact.css"

function Contact(){
    return (
        <div id="contacto">
            <h1>Contacto</h1>
            <p>Si puedo ser de ayuda, puedes contactarme por los siguientes medios</p>
            <div>
                <a href="mailto:bryanrosillo100@hotmail.com"><img src={require("../../../utils/outlook.png")} alt="logo de outlook"/></a>
                <a href="https://www.facebook.com/profile.php?id=100012860282061" target="_blank"><img src={require("../../../utils/facebook.png")} alt="logo de facebook" /></a>
                <a href="https://wa.me/0997761333" target="_blank"><img src={require("../../../utils/whatsapp.png")} alt="logo de whatsapp"/></a>    
            </div>
        </div>
    );
}

export default Contact;