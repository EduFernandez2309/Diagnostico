import React, { useState, useEffect } from "react";
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const TipoProyecto = () => {
  const [tiposProyecto, setTiposProyecto] = useState([]);

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

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-white mb-2">Lista de proyectos</h2>
        <NavLink to="/form-tipo-proyecto" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md">Agregar tipo proyecto</NavLink>
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
              Editar
            </th>
            <th scope="col" className="px-6 py-3">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {tiposProyecto.map(tipo => (
              <tr key={tipo.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{tipo.id}</td>
                <td className="px-6 py-4">{tipo.nombre}</td>
                <td className="px-6 py-4 ">
                  <NavLink 
                    to={{ 
                      pathname: `/edit-tipo-proyecto/${tipo.nombre}/${tipo.id}`
                    }} 
                      className="font-medium text-blue-600 dark:text-blue-500 mr-2"
                  >
                  <svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                  </svg>
                  </NavLink>
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

export default TipoProyecto;
