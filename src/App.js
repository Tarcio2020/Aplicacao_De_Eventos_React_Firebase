import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/*PÁGINAS*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';
import UsuarioRecuperarSenha from './view/recuperarar-senha/';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/NovoUsuario' element={<NovoUsuario />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuariorecuperarsenha' element={<UsuarioRecuperarSenha />} />
      </Routes>
    </Router>
  )
}

export default App;
