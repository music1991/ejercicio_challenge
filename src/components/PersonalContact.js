/* Descripcion*/
/*

PersonalContact.js:
-Recibe como parametros email y phone.
-Retorna en un div los datos de Contact.
*/


import React from "react";
import Card from "./Card";


const PersonalContact = ({ email, phone }) => {
    return(       
        <div>
            <Card>
                <div className="title_card">
                    Contacto
                </div>
                <Card.CardContent>
                
                <div>
                    <b>Email: </b>{email}
                    <br/>
                    <b>Telefono: </b>{phone}
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

export default PersonalContact;