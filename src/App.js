import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from './../src/store/';
import { Provider } from 'react-redux';

/*PÁGINAS*/
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';
import UsuarioRecuperarSenha from './view/recuperarar-senha/';



function App() {
  return (
    //deixamos assim para o store ficar disponivel para todas as rotas.
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/NovoUsuario' element={<NovoUsuario />} />
          <Route path='/login' element={<Login />} />
          <Route path='/usuariorecuperarsenha' element={<UsuarioRecuperarSenha />} />
        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
