import React from "react";
import PersonalContact from "./PersonalContact";
import PersonalDirection from "./PersonalDirection";
import PersonalInformation from "./PersonalInformation";
import styled from "styled-components";

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
const PersonalPerson = ({ person, handlePrevius, handleNext, visiblePreviusButton }) => {   
    const name = person.name;
    const picture = person.picture;

    const location = person.location;

    const email = person.email;
    const phone = person.phone;

    const Button = styled.button`
        border-radius: 30px;
        border-width: 0px;
        margin: 0px;
        display: flex;
        width: 150px;
        justify-content: center; 
        color: #9e9e9e
    `;

    const ElegantButton = styled.button`
  background: linear-gradient(135deg, #6e8efb, #a777e3, #c2c2c2);
  background-size: 200% auto;
  color: white;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #a777e3, #6e8efb, #e0e0e0);
    background-size: 200% auto;
    z-index: -1;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    
    &:before {
      opacity: 1;
      background-position: right center;
    }
  }

  &:active {
    transform: translateY(1px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  /* Efecto de brillo al hacer hover */
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
  }

  &:hover:after {
    width: 200px;
    height: 200px;
  }
`;

    return(
        <div style={{justifyContent: 'center', alignItems: 'center', width: '100%', display: 'flex', flexDirection: 'column'}}>
            <PersonalInformation name={name} picture={picture} />
            <br />
            <PersonalDirection location={location} />
            <br />
            <PersonalContact email={email} phone={phone} />
            <br />
            <div style={{
                padding: '0px',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                display: 'flex'
            }}>
            <ElegantButton onClick={handlePrevius} style={{marginRight: '3%'}} disabled={visiblePreviusButton} >Anterior</ElegantButton>
            <ElegantButton onClick={handleNext}>Siguiente</ElegantButton>          
            </div>
        </div>
    );
}

export default PersonalPerson;