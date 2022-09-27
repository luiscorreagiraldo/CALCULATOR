import React from "react";
import "../hojas-de-estilo/Boton.css"

function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != ".") && (valor != "=")
    };



    return (
        <div className={`botton-container ${esOperador(props.children) ? "operador" : ""}`.trimEnd()} onClick={() => props.manejarClick(props.children)}>
            
            {props.children}
        </div>
    )
}
export default Boton;