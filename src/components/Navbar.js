import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Evaluación diagnóstica</h1>
        <div className="space-x-4">
          <NavLink to="/" className="text-white px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-900 transition duration-300" activeClassName="bg-white text-gray-900">Proyecto</NavLink>
          <NavLink to="/tipo-proyecto" className="text-white px-4 py-2 rounded-md hover:bg-gray-300 hover:text-gray-900 transition duration-300" activeClassName="bg-white text-gray-900">Tipo proyecto</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
