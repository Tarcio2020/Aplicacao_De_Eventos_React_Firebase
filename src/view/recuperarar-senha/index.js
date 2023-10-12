import React, { useState } from 'react';
import './recuperar-senha.css';
import { Link  } from 'react-router-dom';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

function RecuperarSenha() {

    const [email, setEmail] = useState();
    const [msg, setMsg] = useState();

    function regraRecuperarSenha(){
        firebase.auth().sendPasswordResetEmail(email).then(resultado => {
            setMsg('Enviamos um link no seu email, para você redefinir sua senha')
        }).catch(erro => {
            setMsg('Verifique se o email está correto');
        })
    }


    return(
        <>
            <Navbar/>
                <form className='text-center form-login mx-auto mt-5'>
                    <h3 className='mb-3 font-weight-bold'>Recuperar Senha</h3>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='Email'/>

                    <div className='msg my-4 text-center'>
                        <span>{msg}</span>
                    </div>
                    <button onClick={regraRecuperarSenha} type='button' className='btn btn-lg btn-block btn-enviar'>Recuperação de Senha</button>
                </form>
        </>
        )
}
export default RecuperarSenha;