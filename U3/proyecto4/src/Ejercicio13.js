import React, {useSatate} from 'react';

export default function Ejercicio13(){
    return(
        <>
            <label htmlFor='mensaje'>Escriba un mensaje</label>
            <input type='text' id='mensaje'/>
            <input type='button'>Guardar Estado</input>
            <p>El estado es: </p>
        </>
    );
}