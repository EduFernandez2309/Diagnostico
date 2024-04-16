import React, { useState } from "react";
import axios from 'axios';
import { useParams, useNavigate   } from 'react-router-dom';

const EditTipoProyecto = () => {
  const navigate = useNavigate();
  const {id, tipo} = useParams();

  const [nuevoTipoProyecto, setNuevoTipoProyecto] = useState({ id, tipo });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoTipoProyecto({ ...nuevoTipoProyecto, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://127.0.0.1:5000/api/tipo-proyecto/${id}`, {
        nombre: nuevoTipoProyecto.tipo,
      });
      if (response.status === 201) {
        console.log("Tipo de proyecto actualizado correctamente.");
        setNuevoTipoProyecto({ tipo: "" });
        navigate('/tipo-proyecto')
      }
    } catch (error) {
      console.error("Error al actualizar el tipo de proyecto:", error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-96">
        <h2 className="text-lg font-bold text-white mb-2">Editar tipo de proyecto</h2>
        <div>
          <label htmlFor="nombre" className="block text-white">Nombre:</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={nuevoTipoProyecto.tipo}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">Guardar cambios</button>
    </form>
  );
};

export default EditTipoProyecto;
