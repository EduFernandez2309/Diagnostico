import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate   } from 'react-router-dom';

const FormularioProyecto = () => {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [costo, setCosto] = useState("");
  const [tipoProyectoId, setTipoProyectoId] = useState("");
  const [integrantesMinimo, setIntegrantesMinimo] = useState("");

  const [tiposProyecto, setTiposProyecto] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch(name) {
      case "nombre":
        setNombre(value);
        break;
      case "fechaRegistro":
        setFechaRegistro(value);
        break;
      case "costo":
        setCosto(value);
        break;
      case "tipoProyectoId":
        setTipoProyectoId(value);
        break;
      case "integrantesMinimo":
        setIntegrantesMinimo(value);
        break;
      default:
        break;
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:5000/api/tipo-proyecto");
      setTiposProyecto(result.data.tipos_proyecto);
    } catch (error) {
      console.error("Error al obtener los tipos de proyecto:", error);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/proyectos", {
        nombre: nombre,
        fecha_registro: fechaRegistro,
        costo: costo,
        tipo_proyecto_id: tipoProyectoId,
        integrantes_minimo: integrantesMinimo
      });
      if (response.status === 201) {
        console.log("Proyecto agregado correctamente.");
        navigate('/')
      }
    } catch (error) {
      console.error("Error al agregar el proyecto:", error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-96">
      <h2 className="text-lg font-bold text-white mb-2">Registrar proyecto</h2>
      <div>
        <label htmlFor="nombre" className="block text-white">Nombre del proyecto:</label>
        <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleChange} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="fechaRegistro" className="block text-white">Fecha de registro:</label>
        <input type="date" id="fechaRegistro" name="fechaRegistro" value={fechaRegistro} onChange={handleChange} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="costo" className="block text-white">Costo:</label>
        <input type="number" id="costo" name="costo" value={costo} onChange={handleChange} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="tipoProyectoId" className="block text-white">Tipo de proyecto ID:</label>
        <select 
            class="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            name="tipoProyectoId"
            onChange={handleChange} 
          >
            <option  value="0">--Seleccionar--</option>
            {tiposProyecto.map(tipo=>(
              tipo.id !== tiposProyecto.tipoProyectoId && 
              <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
            ))}
          </select>
      </div>
      <div>
        <label htmlFor="integrantesMinimo" className="block text-white">Integrantes Mínimo:</label>
        <input type="number" id="integrantesMinimo" name="integrantesMinimo" value={integrantesMinimo} onChange={handleChange} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Enviar</button>
    </form>
  );
};

export default FormularioProyecto;
