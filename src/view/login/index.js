import React, {useState} from 'react';
import './login.css';
import {Link, Redirect} from 'react-router-dom';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';

import {useSelector, useDispatch} from 'react-redux';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');
    
    const dispatch = useDispatch(); 

    function logar() {
        firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
            setMsgTipo('sucesso');
            setTimeout(() => {
                dispatch({ type: 'LOG_IN', usuarioEmail: email }); 
            },2000);
            
        }).catch(erro => {
            setMsgTipo('erro');
        });
    }

    return (
        <>
            <Navbar />
            {useSelector(state => state.usuarioLogado) ? <Redirect to="/" /> : null}
            <div className='login-content d-flex align-items-center'>
                <form className='form-signin mx-auto'>
                    <h1 className="h3 mb-3 fw-normal text-black font-weigth-bold text-center"><i className="fa-regular fa-user"></i> Login</h1>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control my-2" id="floatingInput" placeholder="E-mail" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="form-control my-2" id="floatingPassword" placeholder="Senha" />
                    <button onClick={logar} className="btn btn-login w-100 py-2" type="button">Entrar</button>
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
