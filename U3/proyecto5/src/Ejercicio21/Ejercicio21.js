import { useEffect, useState } from "react";
export default function Ejercicio21() {
    const [miEstado, setMiEstado] =useState('');
    //useEffect con arreglo vacio[] se carga la primera vez
    useEffect(()=> {
        document.getElementById('miTextArea').value +=
        'UseEffect sin arreglo de dependencias invocado. \r\n';
    }, []);

    useEffect(()=> {
        document.getElementById('miTextArea').value +=
        'UseEffect sinvocado cuadno el estado cambia a ' + miEstado + '. \r\n';
    }, [miEstado]);

    function GuardarEstado(){
        setMiEstado(document.getElementById('idBuscar').value);
    }
    return (
      <div className="container">
        <div className="row">
          <div className="card mt-5">
            <div className="card-body">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="idBuscar" className="form-label">
                          Escriba algo para activar el useEffect...
                        </label>
                        <input
                            onChange={()=> GuardarEstado()}
                          type="text"
                          className="form-control"
                          id="idBuscar"
                        />
                      </div>
                      <textarea id="miTextArea" cols={100} rows={20} />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  