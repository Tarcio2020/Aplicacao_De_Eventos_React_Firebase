import React, { useState } from 'react';
import firebase from '../../config/firebase';
import 'firebase/auth';
import './usuario-novo.css';
import Navbar from '../../components/navbar';

function NovoUsuario() {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [msgTipo, setMsgTipo] = useState('');
    const [msg, setMsg] = useState('');
    const [carregando, setCarregando] = useState('');


    function cadastrar() {
        setCarregando(1);
        setMsgTipo(null);


        if (!email || !senha){
            setMsgTipo('erro')
            setMsg('Você precisa informar o email para fazer o cadastro')
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email,senha).then(resultado => {
            setCarregando(0);

            setMsgTipo('sucesso')
        }).catch(erro => {
            setCarregando(0);

            setMsgTipo('erro')
           switch(erro.message)
            {
                //Tipos de erro Firebase
                //Error: The email address is badly formatted.
                //Error: The email address is already in use by another account.
                //Error: Password should be at least 6 characters.
                case 'Password should be at least 6 characters':
                    setMsg('A senha deve ter no mínimo 6 caracteres!');
                    break;
                case 'The email address is already in use by another account.':
                    setMsg('Este email já está sendo ultilizado!');
                    break;
    
                case 'The email address is badly formatted.':
                    setMsg('Formato de email inválido!');
                    break;
                
                default:
                    setMsg('Não foi possível cadastrar. Tente novamente mais tarde!');
                    break;
            }
            })
    }

    return(
        <>
            <Navbar/>
            <div className='form-cadastro'>
                <form className='text-center form-login mx-auto mt-5'>
                    <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>
                
                    <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='E-mail'/>
                    <input onChange={(e) => setSenha(e.target.value)} type='password' className='form-control my-2' placeholder='Senha'/>
                    
                    {
                        carregando ? <div class="spinner-border text-primary" role="status"><span class="visually-hidden">Loading...</span></div>
                        :<button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
                        
                    }
                    
                    <div className='msg-login text-black text-center my-5'>
                            {msgTipo === 'sucesso' && <span><strong>Usuário cadastrado com sucesso</strong>&#128526;</span>}
                            {msgTipo === 'erro' && <span><strong>Ops!</strong> {msg}</span>}
                    </div>
                
                </form>
            </div>
        </>
    )
}

export default NovoUsuario;
