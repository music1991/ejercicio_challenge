import React from 'react';
import './Loader.css';

const Loader = () => {
    return ( 
        <div className='lds-ellipsis' style={{}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
     );
}
 
export default Loader;