/* Descripcion*/
/*

PersonalInformation.js:
-Recibe como parametros name y picture.
-Retorna en un div los datos de Informacion Personal.
*/


import React from "react";
import Card from "./Card";


const PersonalInformation = ({ name, picture }) => {
    return(
        <div>
            <Card>
                <div className="title_card">
                    Información Personal
                </div>
                <Card.CardContent>
                
                <div>
                    <b>Nombre: </b>{name.first}
                    <br/>
                    <b>Apellido: </b>{name.last}
                    <br />
                    <img src={picture.large} alt={"foto_perfil"}/>
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

export default PersonalInformation;