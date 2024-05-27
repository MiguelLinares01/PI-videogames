import React, { useEffect } from 'react';
import '../App.css';
import { useParams, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allGames} from '../redux/action';

export default function DetailP(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const id = useParams();
    
    useEffect(() => {
        dispatch(allGames());
    }, []);

    const games = useSelector(state => state.allG);
    const maxP = Math.ceil(games.length / 15);

    const perPage = 15;
    const inicio = (id.page-1) * perPage;
    const final = inicio + perPage;
    
    const idGames =games.slice(inicio, final);

    const sum1 = () => {
        id.page = Number(id.page) + 1;
        navigate(`/pages/${id.page}`);
    }

    const sum2 = () => {
        id.page = Number(id.page) + 2;
        navigate(`/pages/${id.page}`);
    }

    const men1 = () => {
        id.page = Number(id.page) - 1;
        navigate(`/pages/${id.page}`);
    }

    const men2 = () => {
        id.page = Number(id.page) - 2;
        navigate(`/pages/${id.page}`);
    }

    return(
        <div className='fondoLP2'>
            <br />
            
            <br />
            
            <div className='palabra-n'>
                Paginado
            </div>
            
            <NavLink to={'/home'} >
                <div className='palabra'>
                    Home
                </div>
            </NavLink> 
            <br /><br /><br />
            <hr style={{width:'95%', height: '12px', backgroundColor:'gray', border:'0', borderRadius:'7px'}}/>
            <br /><br />

            {idGames.map((sap)=>(
                <NavLink to={`/detail/${sap.id}`} style={{color:'black'}} key={sap.id}>
                    <div style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
                        <h5> Nombre: <br /> {sap.nombre} </h5>
                        <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen}  height="125px"/> </h5>
                        <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} <ul>{sap.generos.map((sa)=><li style={{marginLeft:"0px"}}> {sa} </li>)}</ul></h5>
                    </div>
                </NavLink>
            ))}

        <br />
        <div className='center'>
            {id.page - 1 < 1 ? null : <div className='izquierda' style={{cursor: 'pointer'}} onClick={men1}> </div>}
            {id.page - 2 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={men2}> {id.page -2} </div>}
            {id.page - 1 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={men1}> {id.page -1} </div>}
            <div className='numbero'> {id.page} </div>
            {Number(id.page) + 1 > maxP ? null :<div className='numbero' style={{cursor: 'pointer'}} onClick={sum1}> {Number(id.page) +1} </div>}
            {Number(id.page) + 2 > maxP ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={sum2}> {Number(id.page) +2} </div>}
            {Number(id.page) + 1 > maxP ? null : <div className='derecha' style={{cursor: 'pointer'}} onClick={sum1}> </div>}
        </div>
        </div>
    )
}