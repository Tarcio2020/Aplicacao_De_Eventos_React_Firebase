import React, { useState } from 'react';
import './evento-cadastro.css';
import { useSelector } from 'react-redux';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro() {
  const [msgTipo, setMsgTipo] = useState('');
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [detalhes, setDetalhes] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [foto, setFoto] = useState('');
  const usuarioEmail = useSelector((state) => state.usuarioEmail);

  // Firebase
  const storage = firebase.storage();
  const db = firebase.firestore();

  function cadastrar() {
    setMsgTipo(null);

    storage.ref(`imagens/${foto.name}`).put(foto).then(() => {
      //nome da coleção (eventos)
      db.collection('eventos')
        .add({
          titulo,
          tipo,
          detalhes,
          data,
          hora,
          usuario: usuarioEmail,
          visualizacoes: 0,
          foto: foto.name,
          publico: 1,
          criacao: new Date(),
        })
        .then(() => {
          setMsgTipo('sucesso');
        })
        .catch((erro) => {
          setMsgTipo('erro');
        });
    });
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5 col-12">
        <div className="row">
          <h3 className="mx-auto fw-bold">Novo Evento</h3>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipo">Tipo de Evento:</label>
            <select
              id="tipo"
              className="form-control"
              defaultValue=""
              onChange={(e) => setTipo(e.target.value)}
            >
              <option value="">-- selecione um tipo --</option>
              <option>Festa</option>
              <option>Teatro</option>
              <option>Show</option>
              <option>Casamento</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="detalhes">Descrição do Evento</label>
            <textarea
              id="detalhes"
              type="text"
              className="form-control"
              rows={3}
              value={detalhes}
              onChange={(e) => setDetalhes(e.target.value)}
            />
          </div>

          <div className="form-group row">
            <div className="col-6">
              <label htmlFor="data">Data:</label>
              <input
                id="data"
                type="date"
                className="form-control"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label htmlFor="hora">Hora:</label>
              <input
                id="hora"
                type="time"
                className="form-control"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="foto">Upload da Foto:</label>
              <input
                id="foto"
                type="file"
                className="form-control"
                onChange={(e) => setFoto(e.target.files[0])}
              />
            </div>
          </div>
          <button
            type="button"
            className="btn btn-lg btn-block mt-3 mb-5 btn-cadastro"
            onClick={cadastrar}
          >
            Publicar Evento
          </button>
        </form>

        <div className="msg-login text-black text-center mt-2">
          {msgTipo === 'sucesso' && (
            <span>
              <strong>Wow </strong>Evento Publicado! &#128526;
            </span>
          )}
          {msgTipo === 'erro' && (
            <span>
              <strong>Ops! </strong>Não foi possível publicar seu evento!&#128546;
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default EventoCadastro;
