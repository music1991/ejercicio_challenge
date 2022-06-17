/* Descripcion*/
/*

PersonalDirection.js:
-Recibe como parametro location.
-Declaramos las const para obtener los datos de location (state, city, street)
-Retorna en un div los datos de Informacion Personal.
*/


import React from "react";
import Card from "./Card";


const PersonalDirection = ({ location }) => {
    const estado = location.state;
    const ciudad = location.city;
    const calle = location.street.name; 
    const numero = location.street.number;

    return(
        <div>
            <Card>
                <div className="title_card">
                    Dirección
                </div>
                <Card.CardContent>
                
                <div>
                    <b>Estado/Provincia: </b>{estado}
                    <br/>
                    <b>Ciudad: </b>{ciudad}
                    <br/>            
                    <b>Calle: </b>{calle} {numero}  
                </div>
                </Card.CardContent>

                <Card.Expand>
                    <div className="button-up"></div>
                </Card.Expand>
                <Card.Collapse>
                    <div className="button-down"></div>
                </Card.Collapse>
            </Card>
        </div>     
    );
}


export default PersonalDirection;