import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Corrigido a importação

/*PÁGINAS*/
import store from './../src/store/';
import Home from './view/home';
import NovoUsuario from './view/usuario-novo';
import Login from './view/login';
import UsuarioRecuperarSenha from './view/recuperarar-senha/';
import EventoCadastro from './view/evento-cadastro/';
import EventoDetalhes from './view/evento-detalhes/'


function App() {
  return (
    //deixamos assim para o store ficar disponível para todas as rotas.
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/NovoUsuario' element={<NovoUsuario />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/usuariorecuperarsenha' element={<UsuarioRecuperarSenha />} />
          <Route exact path='/eventocadastro' element={<EventoCadastro />} />
          <Route exact path='/eventodetalhes' element={<EventoDetalhes/>} />

        </Routes>
      </Router>
    </Provider>
  )
}

export default App;
