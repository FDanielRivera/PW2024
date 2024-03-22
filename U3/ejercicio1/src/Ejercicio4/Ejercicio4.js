export default function Ejercicio4({Titulo, texto, imagen, alert}){
    return(
        <>
        <div className="card" style={{width: "280px"}}>
            <img src={imagen} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{Titulo}</h5>
                <p className="card-text">{texto}</p>
                <button className="btn btn-danger" type="button">Ver Detalles</button>
            </div>
        </div>
        <br></br>
        </>
    );
}