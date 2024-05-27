import '../App.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

export default function LandingP(){

    return(
        <div className='fondoLP'>
                <h1 className='hh2'>
                <br /><br /><br />
                🎮 BIENVENIDO(A) A MI PROYECTO INDIVIDUAL SOBRE LOS VIDEOJUEGOS 🎮 
                <br /><br /><br />
                ESPERO LO DISFRUTES VIÉNDOLO ASÍ COMO YO DISFRUTÉ HACIÉNDOLO🥳
                <br /><br /><br /><br />
                <button className='btn'>
                    <NavLink to="/home" style={{textDecoration:"none", color:'lightgreen', fontWeight:'bold'}}>
                        Ir a la página hogar
                    </NavLink>
                </button>
                <br /><br /><br /><br />
                </h1>
            <div className='fondoLP'>
            </div>
        </div>
    )
}