import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './evento-card.css';

function EventoCard() {
    return (
        <>
            <div className='col-md-3 col-sm-12'>
                <img src='https://via.placeholder.com/500x500' className='card-img-top img-cartao' alt='Imagem do Evento'></img>
                <div className='card-body'>
                    <h5>Titulo do Evento</h5>
                    <p className='card-text text-justify'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia dolorem tempore autem assumenda est numquam magni corrupti totam illum! Laudantium doloribus est omnis asperiores tempora libero quisquam quod esse a.                    </p>
                    <div className='row rodape-card d-flex align-items-center'>
                        <div className='col-6'>
                            <Link to='/' className='btn btn-sm btn-detalhes'>+Detalhes</Link>
                        </div>
                        <div className='col-6 text-right'>
                            <i className='fas fa-eye'></i><span>2019</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventoCard;
