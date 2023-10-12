import { createStore } from 'redux';
import usuarioReducer from './usuarioReducer'; // Importe o seu reducer aqui

const store = createStore(usuarioReducer);

export default store;
