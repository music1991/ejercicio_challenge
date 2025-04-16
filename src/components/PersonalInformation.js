import React from "react";
import useCollapse from 'react-collapsed';
import styled from "styled-components";

/* Descripcion*/
/*

PersonalInformation.js:
-Recibe como parametros name y picture.
-Retorna en un div los datos de Informacion Personal.
*/
export const Item = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px
`;


const PersonalInformation = ({ name, picture }) => {

    return(
        <div className="collapsible">
            <div className="header">
                Information
            </div>

            <div>
                <div className="content">
                    <Item><u>Name</u>: {name.first}</Item>
                    <Item><u>Lastname</u>: {name.last}</Item>
                    <img src={picture.large} alt={"foto_perfil"} style={{borderRadius: '12px', marginTop: '5px'}}/>
                </div>
            </div>
        </div>
    );
}

export default PersonalInformation;