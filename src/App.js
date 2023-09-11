import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*PÁGINAS*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NovoUsuario' element={<NovoUsuario />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;
