import React, { useState } from 'react';
import { useSelector, Dispatch } from 'react-redux';
import Navbar from '../../components/navbar';
import firebase from '../../config/firebase';
import 'firebase/auth';

import './evento-detalhes.css'

function EventoDetalhes () {
    return (

        <>
            <Navbar/>
            <div className='container-fluid'>
                <div className='row'>
                    <img src='https://placehold.co/150x150@2x.png' className='img-banner' alt='Banner' />
                </div>
            </div>

            <div className='row mt-5 d-flex justify-content-around'>
                <div className='col-md-3 col-sm-12 box-info p-3'>
                    <i className='fas fa-fa-ticket-alt fa-2x'></i>
                </div>

            </div>
        
        </>
    )

}

export default EventoDetalhes
