import React from "react";
import useCollapse from 'react-collapsed';

/* Descripcion*/
/*

PersonalInformation.js:
-Recibe como parametros name y picture.
-Retorna en un div los datos de Informacion Personal.
*/

const PersonalInformation = ({ name, picture }) => {
    const { getCollapseProps, getToggleProps } = useCollapse();

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()}>
                Informacion Personal
            </div>

            <div {...getCollapseProps()}>
                <div className="content">
                    <b>Nombre: </b>{name.first}
                    <br/>
                    <b>Apellido: </b>{name.last}
                    <br />
                    <img src={picture.large} alt={"foto_perfil"}/>
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;