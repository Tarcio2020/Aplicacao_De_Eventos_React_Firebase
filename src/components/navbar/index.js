import React, { useState } from 'react';
import './navbar.css';
import { Link  } from 'react-router-dom';


function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <span className="navbar-brand text-white text-weight-bold">Eventos</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                     </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/'>Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/novousuario'>Cadastrar</Link></li>
                    <li className="nav-item"><Link className="nav-link" aria-current="page" to='/login'>Login</Link></li>

                </ul>
                </div>
            </div>
        </nav>    
    )
}

export default Navbar;