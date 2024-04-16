import React, { useEffect, useState } from "react";
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const Proyecto = () => {
  const navigate = useNavigate();
  const [proyectoData, setProyectoData] = useState([]); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:5000/api/proyectos");
      setProyectoData(result.data.proyecto);
    } catch (error) {
      console.error("Error al obtener los proyectos:", error);
    }
  }

  const handleEditar = (proyecto) => {
    navigate(`/edit-proyecto/${proyecto.id}`, {
      state: {
        proyecto
      }
    });
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-white mb-2">Lista de proyectos</h2>
        <NavLink to="/form-proyecto" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">Agregar proyecto</NavLink>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Fecha de Registro
            </th>
            <th scope="col" className="px-6 py-3">
              Costo
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo de Proyecto ID
            </th>
            <th scope="col" className="px-6 py-3">
              Integrantes Mínimo
            </th>
            <th scope="col" className="px-6 py-3">
              Editar
            </th>
            <th scope="col" className="px-6 py-3">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {proyectoData.map(proyecto => (
            <tr key={proyecto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6 py-4">{proyecto.id}</td>
              <td className="px-6 py-4">{proyecto.nombre}</td>
              <td className="px-6 py-4">{proyecto.fecha_registro}</td>
              <td className="px-6 py-4">{proyecto.costo}</td>
              <td className="px-6 py-4" id={proyecto.tipo_proyecto.id}>{proyecto.tipo_proyecto.nombre}</td>
              <td className="px-6 py-4">{proyecto.integrantes_minimo}</td>
              <td className="px-6 py-4 ">
                <button  onClick={() => handleEditar(proyecto)}
                  className="font-medium text-blue-600 dark:text-blue-500 mr-2"
                >
                <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>
              </td>
              <td className="px-6 py-4 ">
                <button className="font-medium text-red-600 dark:text-red-500">
                  <svg className="w-7 h-7" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M19 7.6l-1.4-1.4-4.6 4.6-4.6-4.6-1.4 1.4 4.6 4.6-4.6 4.6 1.4 1.4 4.6-4.6 4.6 4.6 1.4-1.4-4.6-4.6 4.6-4.6z"/>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Proyecto;
