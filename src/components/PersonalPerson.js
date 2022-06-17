/* Descripcion*/
/*

PersonalPerson.js:
-Recibe como parametros person, handlePrevius, handleNext, visiblePreviusButton.
-Se declaran las variables para descomponer el objeto person (name, picture, location, email y phone)
-Retorna un div el cual contendra los componente:
    .PersonalInformation, que recibe name y picture como parametros.
    .PersonalDirection, que recibe location como parametro.
    .PersonalContact, que recibe email y phone como parametros.
    .Botones:
        *Anterior, el cual tiene como evento un onClick, que activa la funcion handlePrevius.
        Tambien mostrara visiblePreviusButton como bandera en el atributo disabled.
        *Sigueinte, el cual tiene como evento un onClick, que activa la funcion handleNext.
*/


import React from "react";
import PersonalContact from "./PersonalContact";
import PersonalDirection from "./PersonalDirection";
import PersonalInformation from "./PersonalInformation";


const PersonalPerson = ({ person, handlePrevius, handleNext, visiblePreviusButton }) => {   
    const name = person.name;
    const picture = person.picture;

    const location = person.location;

    const email = person.email;
    const phone = person.phone;

    return(
        <div>
            <PersonalInformation name={name} picture={picture} />
            <PersonalDirection location={location} />
            <PersonalContact email={email} phone={phone} />
            <br/>
            <button onClick={handlePrevius} disabled={visiblePreviusButton} >Anterior</button>
            <button onClick={handleNext}>Siguiente</button>             
        </div>
    );
}

export default PersonalPerson;