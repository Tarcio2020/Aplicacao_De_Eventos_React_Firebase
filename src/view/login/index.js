import React, { useState } from 'react';
import './login.css';
import { Link  } from 'react-router-dom';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');


    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso')
        }).catch(erro => {
            setMsgTipo('erro')

        })
    }

    return(
        <>
            <Navbar/>
            <div className='login-content d-flex align-items-center'>
                <form className='form-signin mx-auto'>
                    <h1 class="h3 mb-3 fw-normal text-black font-weigth-bold text-center"><i class="fa-regular fa-user"></i> Login</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control my-2" id="floatingInput" placeholder="E-mail"/>             
                    <input onChange={(e) => setSenha(e.target.value)} type="password" class="form-control my-2" id="floatingPassword" placeholder="Senha"/>
                    <button onClick={logar} class="btn btn-login w-100 py-2" type="button">Entrar</button>
                    <div className='msg-login text-black text-center my-5'>
                            {msgTipo === 'sucesso' && <span><strong>Wow </strong> Você está conectado! &#128526;</span>}
                            {msgTipo === 'erro' && <span><strong>Ops! </strong>Verifique se a senha ou usuário estão corretos! &#128546;</span>}
                    </div>
                    <div className='opcoes-login mt-5'>
                        <Link to='/usuariorecuperarsenha' className='mx-2'>Recuperar Senha </Link>
                        <span className='text-black'>&#9733;</span>
                        <Link to='/NovoUsuario' className='mx-2'> Cadastre-se</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login;



