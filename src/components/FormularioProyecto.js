import React, { useState } from "react";

const FormularioProyecto = () => {
  const [nombre, setNombre] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState("");
  const [costo, setCosto] = useState("");
  const [tipoProyectoId, setTipoProyectoId] = useState("");
  const [integrantesMinimo, setIntegrantesMinimo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones necesarias
    console.log("Datos del formulario:", { nombre, fechaRegistro, costo, tipoProyectoId, integrantesMinimo });
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4 px-96">
      <h2 className="text-lg font-bold text-white mb-2">Registrar proyecto</h2>
      <div>
        <label htmlFor="nombre" className="block text-white">Nombre del proyecto:</label>
        <input type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="fechaRegistro" className="block text-white">Fecha de registro:</label>
        <input type="date" id="fechaRegistro" value={fechaRegistro} onChange={(e) => setFechaRegistro(e.target.value)} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="costo" className="block text-white">Costo:</label>
        <input type="text" id="costo" value={costo} onChange={(e) => setCosto(e.target.value)} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="tipoProyectoId" className="block text-white">Tipo de proyecto ID:</label>
        <input type="text" id="tipoProyectoId" value={tipoProyectoId} onChange={(e) => setTipoProyectoId(e.target.value)} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <div>
        <label htmlFor="integrantesMinimo" className="block text-white">Integrantes Mínimo:</label>
        <input type="text" id="integrantesMinimo" value={integrantesMinimo} onChange={(e) => setIntegrantesMinimo(e.target.value)} className="w-full rounded-md px-4 py-2 bg-gray-800 text-white" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Enviar</button>
    </form>
  );
};

export default FormularioProyecto;
