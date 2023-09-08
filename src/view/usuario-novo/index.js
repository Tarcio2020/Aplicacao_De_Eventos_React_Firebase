import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';

function novoUsuario() {
    return(
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>cadastro</h1>
                <input type='email' className='form-control my-2' placeholder='E-mail'/>
                <input type='password' className='form-control my-2' placeholder='Senha'/>
                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
            </form>
        </div>
    )
}

export default novoUsuario;
