import React, {useState} from 'react';
import './evento-cadastro.css';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import {Link, Redirect} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';

function EventoCadastro () {

    const [msgTipo, setMsgTipo] = useState();


    return(
        <>
        <Navbar/>
        <div className='container mt-5 col-12'>
            <div className='row'>
                <h3 className='mx-auto fw-bold'>Novo Evento</h3>
            </div>
            <form>
                <div className='form-group'>
                    <label>Título</label>
                    <input type='text' className='form-control'/>
                </div>
                <div className='form-group'>
                    <label>Tipo de Evento:</label>
                    <select className='form-control'>
                        <option disabled selected value>-- selecione um tipo --</option>
                        <option>Festa</option>
                        <option>Teatro</option>
                        <option>Show</option>
                        <option>Casamento</option>
                    </select>
                </div>

                <div className='form-group'>
                    <label>Descrição do Evento</label>
                    <textarea type='text' className='form-control' rows={3}/>
                </div>

                <div className='form-group row'>
                    <div className='col-6'>
                        <label>Data:</label>
                        <input type='date' className='form-control'/>
                    </div>
                    <div className='col-6'>
                        <label>Hora:</label>
                        <input type='time' className='form-control'/>
                    </div>
                    <div className='form-group'>
                    <label>Upload da Foto:</label>
                    <input type='file' className='form-control'/>
                </div>
                </div>
                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Publicar Evento</button>
            </form>

            <div className='msg-login text-black text-center mt-2'>
                {msgTipo === 'sucesso' && <span><strong>Wow </strong>Evento Publicado! &#128526;</span>}
                {msgTipo === 'erro' && <span><strong>Ops! </strong>Não foi possível publicar seu evento!&#128546;</span>}
            </div>
        </div> 
        </>
    )
}

export default EventoCadastro;