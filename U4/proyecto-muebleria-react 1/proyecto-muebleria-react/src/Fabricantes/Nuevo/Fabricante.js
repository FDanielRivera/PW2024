import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Fabricante.css";

export default function Fabricante() {
  const navigate = useNavigate();
  const [nombreFabricante, setNombreFabricante] = useState("");
  const [error, setError] = useState(null);
 
  function guardaFabricanteEnEstado(e) {
    setNombreFabricante(e.target.value);
  }
 
  const guardaFabricante = async () => {
    try {
      // Hacer el request POST
      const response = await axios.post(
        "https://localhost:7232/Muebleria/AgregarFabricante?nombreAgregar=" +
        nombreFabricante,
      );
      if (response.status === 200) {
        navigate("/FabricantesListado");
      }
    } catch (error) {
      // En caso de error
      setError(error);
    }
  };
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container-fluid">
      <h1>Nuevo Fabricante</h1>
      <form>
        <div class="form-group">
          <label for="Nombre">Nombre del Fabricante</label>
          <input type="text" class="form-control" id="Nombre" onChange={(e)=> guardaFabricanteEnEstado (e)}  />
        </div>
        <div className="posicion-botones ">
          <a href="/FabricantesListado" className="btn btn-secondary">
            Cancelar
          </a>
          <button type="button" className="btn btn-primary" onClick={() => guardaFabricante ()}>
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
