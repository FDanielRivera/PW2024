export default function Ejercicio17b({pkg, setPaquete}){
    function Borrar(){
        setPaquete(
            {
                numeroGuia: '',
                estatus: '',
                actualizadoPor: '',
            }
        )
    }
    return (
        <div className="card" style={{ width: "300px", height: "300px" }}>
        <div className="card-body">
          <h5 className="card-title">Estado</h5>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Número de Guía:{pkg.numeroGuia}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Estatus: {pkg.estatus}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Actualizado Por:{pkg.actualizadoPor}
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Fecha Actualizacion:{pkg.fecha}
            </label>
          </div>
          <div className="text-center">
            <button onClick={() => Borrar()} type="button" className="btn btn-primary btn-lg">
              Borrar
            </button>
          </div>
        </div>
      </div>

    );
}