import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './evento-card.css';

function EventoCard() {
    return (
        <>
            <div className='col-md-3 col-sm-12'>
                <img src='' id='banner-evento' className='card-img-top img-cartao' alt='Imagem do Evento'></img>

                <div className='card-body'>
                    <h5>Titulo do Evento</h5>
                    <p className='card-text text-justify'>Detalhes do Evento</p>

                    <div className='row rodape-card d-flex align-items-center'>
                        <Link to='/' className='btn btn-sm btn-detalhes'>+Detalhes</Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default EventoCard;
