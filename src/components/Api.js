/* Descripcion*/
/*


En Api.js establecemos:
- Las const a utilizar (prev_person, person, next_person, consult_counter, 
  visiblePreviusButton, error, loading) con useState.

- UseEffect: realiza la peticion mediante helpHttp y tambien altera los valores 
  de loading, person y error con useState.
  Su frecuencia de ejecucion dependera del cambio de estado de consult_counter.

- Las funciones.
    .handlePrevius: cambia los valores de next_person, person y visiblePreviusButton 
    con setState.
    .handleNext: cambia los valores de person, next_person, prev_person, consult_counter 
    y visiblePreviusButton con setState. 

- En el render se muestra..
    .Un div, el cual contiene:
    -Titulo
    -Condicionante que evalua loading, para mostrar o no el componente Loader.
    -Condicionante que evalua error, para mostrar o no el componente Message.
        *Message recibe como props msg y bgColor.
    -Condicionante que evalua person, para mostrar o no el componente PersonalPerson.
        *PersonalPerson recibe como props person, handlePrevius, handleNext 
        y visiblePreviusButton.

.LOGICA DE BOTONES SIGUIENTE Y ANERIOR:
1)
Incialmente se realizo una peticion fetch, se muestra en pantalla el resultado, 
es decir los datos de la persona, el boton Anterior esta deshabilitado. 
y solo se puede presionar el boton Siguiente.
El contador de personas visualizadas inicia en 1 (consult_counter).

1.2)
Al presionar Siguiente se evalua que next_person se encuentre en NULL.
Next_person al inciar se encuentra en NULL, entonces si se presiona siguiente 
por primera vez se actualiza el estado de prev_person y el estado de consult_counter, 
desencadenando una nueva peticion; tambien se cambia el valor de visiblePreviusButton a false
(provocando que se habilite el boton Anterior).
En pantalla se muestran los datos de la nueva persona obtenida.
Siempre que se realice una nueva peticion el contador de personas visualizadas aumentara en uno.

2) 
Se puede presionar nuevamente el boton Siguiente o simplemente el boton Anterior.
Si se presiona siguiente, se repetira el proceso 1.1.
Si se presona Anterior, se actualizaran los estados de:
-nextperson con el estado actual de person.
-person con el estado actual de prev_person.
-visiblePreviusButton a true.
Entonces el boton Anterior se deshabilita y en pantalla se muestra la persona previa.

3) Solo se puede presionar siguiente, pero esta vez next_person no es NULL,
entonces se cambia el estado de person a next_person y next person se cambia a NULL.
En pantalla se mostrara la persona que ya se visualizo con anterioridad 
sin cambiar el contador de personas visualizadas y Anterior se habilita.

4) Se repite el proceso 2.
*/


import React, { useEffect, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

import Loader from "./Loader";
import Message from "./Message";

import PersonalPerson from "./PersonalPerson";


const Api = () => {       
    const [prev_person, setPrev_person] = useState(null);
    const [person, setPerson] = useState(null);
    const [next_person, setNext_person] = useState(null);

    const [consult_counter, setConsult_counter] = useState(1);
    const [visiblePreviusButton, setVisiblePreviusButton] = useState(true);

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
      

    useEffect (()=>{
        setLoading(true);

        let url = "https://randomuser.me/api";
        
        helpHttp().get(url).then(res => {
            
            if(!res.err){
               // console.log(res.results);
                setPerson(res.results[0]);                              
                setError(null);
            }
            else{                
                //console.log('Ocurrio un error');
                setPerson(null);
                setError(res);
            }

            setLoading(false);
           
        });
    }, [consult_counter])
      

    const handlePrevius = () => {
        setNext_person(person);
        setPerson(prev_person);
        setVisiblePreviusButton(true);
    }

    const handleNext = () => {
        if(next_person !== null){
            setPerson(next_person);
            setNext_person(null);
        }
        else{
            setPrev_person(person);
            setConsult_counter(consult_counter + 1);
        }
        
        setVisiblePreviusButton(false);
    }


    return(
        <div>
            <h1>Persona</h1>
            
            {loading && <Loader />}

            {error && <Message msg={`Error: ${error.statusText}`} bgColor="#dc3545"/>}

            {person && <PersonalPerson person={person} handlePrevius={handlePrevius} handleNext={handleNext} visiblePreviusButton={visiblePreviusButton} />}

            <h4>Contador de personas visualizadas: {consult_counter}</h4>
        </div>
    );
}

export default Api;