import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams, useNavigate, useLocation   } from 'react-router-dom';

const EditProyecto = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const [tiposProyecto, setTiposProyecto] = useState([]);
  const { nombre, costo, tipo_proyecto, integrantes_minimo } = location.state.proyecto;

  let tipoProyectoId=tipo_proyecto.id;
  let tipo_proyecto_nombre=tipo_proyecto.nombre;

  const [nuevoProyecto, setNuevoProyecto] = useState({ 
    id, 
    nombre, 
    costo, 
    tipo_proyecto_nombre, 
    integrantes_minimo, 
    tipoProyectoId 
  });

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoProyecto({ ...nuevoProyecto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/proyectos/${id}`, {
        nombre: nuevoProyecto.nombre,
        costo: nuevoProyecto.costo,
        tipo_proyecto_id: nuevoProyecto.tipoProyectoId,
        integrantes_minimo: nuevoProyecto.integrantes_minimo,
      });
      if (response.status === 201) {
        console.log("Proyecto actualizado correctamente.");
        setNuevoProyecto({ proyecto: "" });
        navigate('/')
      }
    } catch (error) {
      console.error("Error al actualizar el proyecto:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-96">
        <h2 className="text-lg font-bold text-white mb-2">Editar proyecto</h2>
        <div>
          <label htmlFor="nombre" className="block text-white">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevoProyecto.nombre}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="nombre" className="block text-white">Costo:</label>
          <input
            type="text"
            id="costo"
            name="costo"
            value={nuevoProyecto.costo}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <div>
          <label htmlFor="nombre" className="block text-white">Tipo proyecto:</label>
          <select 
            class="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm focus:outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            name="tipoProyectoId"
            onChange={handleChange} 
          >
            <option  value={nuevoProyecto.tipoProyectoId}>{nuevoProyecto.tipo_proyecto_nombre}</option>
            {tiposProyecto.map(tipo=>(
              tipo.id !== nuevoProyecto.tipoProyectoId && 
              <option key={tipo.id} value={tipo.id}>{tipo.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="nombre" className="block text-white">Integrantes mínimo:</label>
          <input
            type="number"
            id="integrantes_minimo"
            name="integrantes_minimo"
            value={nuevoProyecto.integrantes_minimo}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">Guardar cambios</button>
    </form>
  );
};

export default EditProyecto;