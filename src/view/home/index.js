import React, { useState } from 'react';
import './home.css';
import { Link  } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { useSelector } from 'react-redux';
import EventoCard from '../../components/evento-card/';


function Home() {
    return(
        <>
            <Navbar />
            <h1>Home</h1>
            <h1>{useSelector(state => state.usuarioEmail)}</h1>
            <h1>Logado: {useSelector(state => state.usuarioLogado)}</h1>
            <EventoCard />
        </>
    )
}

export default Home;