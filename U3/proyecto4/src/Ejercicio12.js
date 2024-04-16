import React, {useState} from 'react';

export default function Ejercicio12(){
    const[nombre , setNombre] = useState('');
    const[apellido , setApellido] = useState('');

    function GuardarNombre(){
        const inputNombre = document.getElementById('nombre').value;
        const inputApellido = document.getElementById('apellido').value;
        setNombre(inputNombre);
        setApellido(inputApellido); 

    }



    return(
        <>
            <label htmlFor='nombre'>Escriba su nombre</label>
            <br/>
            <input type='text' id='nombre'/>
            <br/>
            <label htmlFor='Apellido'>Escriba su Apellido</label>
            <br/>
            <input type='text' id='apellido'/>

            <br/>
            <input onClick={() => GuardarNombre()} type='text' value='Guardar Estado'/>
            <p>Hola, {nombre} {apellido} </p>
        </>
    );
}