/* Descripcion*/
/*

Message.js:
-Recibe como props msg, bgColor
-Define styles
-Retorna un div con el estilo descripto en styles, y muestra la props msg recibida.
*/


import React from 'react';

const Message = ({ msg, bgColor}) => {

    let styles = {
        padding: "1rem",
        maginBottom: "1rem",
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: bgColor,
    }

    return ( 
        <div style={styles}>
            <p>{msg}</p>
        </div>
     );
}
 
export default Message;