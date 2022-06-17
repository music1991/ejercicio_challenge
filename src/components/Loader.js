/* Descripcion*/
/*

Loader.js define un div con la clase lds-ellipsis y a su vez contiene divs en blanco.
*/


import React from 'react';
import './Loader.css';

const Loader = () => {
    return ( 
        <div className='lds-ellipsis'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default Loader;