import React from "react";
import useCollapse from 'react-collapsed';
import { Item } from "./PersonalInformation";
import styled from "styled-components";

/* Descripcion*/
/*

PersonalDirection.js:
-Recibe como parametro location.
-Declaramos las const para obtener los datos de location (state, city, street)
-Retorna en un div los datos de Informacion Personal.
*/

export const ArrowIcon = styled.div`
  transition: transform 0.3s ease;
  margin-left: 8px;
  
  &::after {
    content: '▼';
    display: inline-block;
    color: #6e8efb;
    ${({ $isExpanded }) => $isExpanded && `
      transform: rotate(180deg);
    `}
  }
`;

const PersonalDirection = ({ location }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: false});

    const state = location.state;
    const city = location.city;
    const street = location.street.name; 
    const number = location.street.number;

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()} style={{display: 'flex'}}>
                <ArrowIcon $isExpanded={isExpanded} />
                Address
            </div>

            <div {...getCollapseProps()}>
                <div className="content">
                    <Item><u>State</u>: {state}</Item>
                    <Item><u>City</u>: {city}</Item>
                    <Item><u>Street</u>: {street} {number}</Item>
                </div>
            </div>
        </div>        
    );
}


export default PersonalDirection;