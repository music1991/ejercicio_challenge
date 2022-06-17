import React from "react";
import useCollapse from 'react-collapsed';

/* Descripcion*/
/*

PersonalDirection.js:
-Recibe como parametro location.
-Declaramos las const para obtener los datos de location (state, city, street)
-Retorna en un div los datos de Informacion Personal.
*/

const PersonalDirection = ({ location }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();

    const estado = location.state;
    const ciudad = location.city;
    const calle = location.street.name; 
    const numero = location.street.number;

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                Direccion
            </div>

            <div {...getCollapseProps()}>
                <div className="content">
                    <b>Estado/Provincia: </b>{estado}
                    <br/>
                    <b>Ciudad: </b>{ciudad}
                    <br/>            
                    <b>Calle: </b>{calle} {numero}  
                </div>
            </div>
        </div>        
    );
}


export default PersonalDirection;