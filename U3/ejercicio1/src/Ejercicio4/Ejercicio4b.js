export default function Ejercicio4b({alert, tipoA}){
    return(
        <>
        <div class={tipoA} role="alert">
        {alert}
        </div>
        </>
    );
}