import React, { useState } from 'react';
import './login.css';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            alert('usuario logado')
        }).catch(erro => {
            alert(erro)

        })
    }

    return(
        <div className='login-content d-flex align-items-center'>
            <form className='form-signin mx-auto'>
                <h1 class="h3 mb-3 fw-normal text-white font-weigth-bold text-center">Login</h1>
                <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail"/>             
                <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                <button onClick={logar} class="btn btn-login w-100 py-2" type="button">Entrar</button>

                <div className='msg-login text-white text-center my-5'>
                    <span><strong>Wow</strong>Você está concectado! &#128526;</span> <br/>
                    <span><strong>Ops!</strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>
                </div>

                <div className='opcoes-login mt-5'>
                    <a href='#' className='mx-2'>Recuperar Senha</a>
                    <span className='text-white'>&#9733;</span>
                    <a href='#' className='mx-2'>Cadastre-se</a>
                </div>
            </form>
        </div>
    )
}

export default Login;
