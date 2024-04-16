import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import TipoProyecto from './components/TipoProyecto';
import Proyecto  from './components/Proyecto';
import Navbar from './components/Navbar';
import FormularioProyecto from './components/FormularioProyecto';
import FormularioTipoProyecto from './components/FormularioTipoProyecto';
import EditTipoProyecto from './components/EditTipoProyecto';
import EditProyecto from './components/EditProyecto';

function App() {
  return (
    <div className='min-h-screen bg-gray-900'>
      <div className='container mx-auto px-4'>
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Proyecto />} />
            <Route path='/tipo-proyecto' element={<TipoProyecto />} />
            <Route path='/form-proyecto' element={<FormularioProyecto />} />
            <Route path='/form-tipo-proyecto' element={<FormularioTipoProyecto />} />
            <Route path='/edit-tipo-proyecto/:tipo/:id' element={<EditTipoProyecto />} />
            <Route path='/edit-proyecto/:id' element={<EditProyecto />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
