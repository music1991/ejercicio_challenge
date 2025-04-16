import React from "react";
import useCollapse from 'react-collapsed';
import { Item } from "./PersonalInformation";
import { ArrowIcon } from "./PersonalDirection";

/* Descripcion*/
/*

PersonalContact.js:
-Recibe como parametros email y phone.
-Retorna en un div los datos de Contact.
*/

const PersonalContact = ({ email, phone }) => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ defaultExpanded: false});

    return(
        <div className="collapsible">
            <div className="header" {...getToggleProps()} style={{display: 'flex'}}>
                <ArrowIcon $isExpanded={isExpanded} />
                Contact
            </div>
            <div {...getCollapseProps()}>
                <div className="content">
                    <Item><u>Email</u>: {email}</Item>
                    <Item><u>Phone</u>: {phone}</Item>
                </div>
            </div>
        </div>         
    );
}

export default PersonalContact;