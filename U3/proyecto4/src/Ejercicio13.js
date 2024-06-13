import React, {useState} from 'react';

export default function Ejercicio13(){
    const[mensaje , setMensaje] = useState('');

    function GuardarMensaje(){
        const inputMsj = document.getElementById('mensaje').value;
        setMensaje(inputMsj);

    }



    return(
        <>
             <label htmlFor='mensaje'>Escriba un mensaje</label>
            <input type='text' id='mensaje'/>
            <input onClick={() => GuardarMensaje()} type='button' value='Guardar Mensaje'/>
            <p>El estado es: {mensaje}</p>
        </>
    );
}
