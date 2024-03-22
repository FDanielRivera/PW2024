import './Ejercicio2.css'

export default function Ejercicio2({nombre, año}){
    //regresa JSX
    return(
        <>
            <h1 className="Letra">Bienveindo seas, estimado...{nombre}</h1>
            <p className='LetraP'>Copyright 2024</p> 
            <p>el año es: {año}</p>     
        </>
        
    );
}