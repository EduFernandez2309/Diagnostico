import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const FormularioTipoProyecto = () => {
  const navigate = useNavigate() 

  const [nuevoNombre, setNuevoNombre] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "nombre"){

    }
    setNuevoNombre(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/api/tipo-proyecto", {
        nombre: nuevoNombre
      });
      if (response.status === 201) {
        console.log("Tipo de proyecto agregado correctamente.");
        navigate('/tipo-proyecto')
      }
    } catch (error) {
      console.error("Error al agregar el tipo de proyecto:", error.message);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-96">
        <h2 className="text-lg font-bold text-white mb-2">Registrar tipo de proyecto</h2>
        <div>
          <label htmlFor="nombre" className="block text-white">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevoNombre}
            onChange={handleChange}
            className="w-full rounded-md px-4 py-2 bg-gray-800 text-white"
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-4">Agregar tipo de proyecto</button>
    </form>
  );
};

export default FormularioTipoProyecto;
