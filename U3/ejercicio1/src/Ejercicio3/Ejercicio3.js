import './Ejercicio3.css'
export default function Ejercicio3() {
    return(
        <>
        <p className='letra'>Da click en el Boton Por favor</p>
        <div className='centrar'>
            <button onClick={() => alert('Holaaaa')} 
            className="btn btn-danger"
            type="button">Aceptar</button>
        </div>
        </>
    );
}