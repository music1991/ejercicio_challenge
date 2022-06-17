import React from "react";
import useCollapse from 'react-collapsed';

/* Descripcion*/
/*

PersonalContact.js:
-Recibe como parametros email y phone.
-Retorna en un div los datos de Contact.
*/

const PersonalContact = ({ email, phone }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
            Contacto
            </div>

            <div {...getCollapseProps()}>
                <div className="content">
                    <b>Email: </b>{email}
                    <br/>
                    <b>Telefono: </b>{phone}
                </div>
            </div>
        </div>         
    );
}

export default PersonalContact;