import React, { useState } from 'react';
import './navbar.css';
import { Link  } from 'react-router-dom';


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg ">
            <span className="navbar-brand text-white font-weight-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/NovoUsuario'>Cadastrar</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/login'>Login</Link></li>

                </ul>
            </div>
        </nav>    
    )
}

export default Navbar;