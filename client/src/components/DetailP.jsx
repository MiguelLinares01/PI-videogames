import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import { findId, noId } from '../redux/action';

export default function DetailP(){
    
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(findId(id));
    }, [])

    const game = useSelector(state => state.gameId);

    useEffect(() => () => {
        dispatch(noId());
    }, [])

    const byebye = () => {
        navigate(`/home`);
    }

    console.log(game);

    return(
        <div className='fondoLP2'>
            <br /><br /><br /><br />
            {game.map((sap)=>(
            <div style={{cursor:'pointer', backgroundColor:'#b6b6b6', border: '4px solid #B9935A', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block', width:"800px", fontSize:"30px"}}>
            <h5> Nombre: <br /> {sap.nombre} </h5>
            <h5> ID: {sap.id} </h5>
            {sap.plataformas !== undefined ? <h5> {sap.plataformas.length > 1 ? <ola>Plataformas:</ola> : <ola> Plataforma:</ola>} <br /> {sap.plataformas.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa} </lal>)}</h5> : <h5> {sap.Plataformas.length > 1 ? <ola>Plataformas:</ola> : <ola> Plataforma:</ola>} <br /> {sap.Plataformas.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa.nombre} </lal>)}</h5>}
            <h5> Imagen: <br /><br /> <img src={sap.imagen} alt={sap.imagen}  height="200px"/> </h5> <br />
            <h5> Descripcion: <br /> {sap.descripcion} </h5> <br />
            <h5> Fecha de lanzamiento: {sap.lanzamiento} </h5>
            <h5> Rating: {sap.rating} </h5>
            {
                sap.Generos !== undefined ?
                <h5> {sap.Generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} {sap.Generos.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa.nombre} </lal>)}</h5> :
                <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} {sap.generos.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa} </lal>)}</h5>
            }
          </div>
          ))} <br /><br /><br />
          <div className='izquierda' style={{cursor:'pointer'}} onClick={byebye}></div> <br /><br /><br /><br />
        </div>
    )
}