import React, { useState } from 'react';
import './recuperar-senha.css';
import { Link  } from 'react-router-dom';
import Navbar from '../../components/navbar';

import firebase from '../../config/firebase';
import 'firebase/auth';

function RecuperarSenha() {
    return(
        <>
            <Navbar/>
            <div>
                <form>
                    <h1>Recuperar Senha</h1>
                </form>
            </div>
        </>
        )
}
export default RecuperarSenha;