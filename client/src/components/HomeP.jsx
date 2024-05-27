import '../App.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { allGames, gamesName, generos } from '../redux/action';
import React, { useEffect, useState } from 'react';

export default function HomeP(){

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allGames());
        dispatch(generos());
    }, []);

    const submitG = event =>{
        event.preventDefault();
    }

    const [gameName, setGameName] = useState('');

    const handleChange = event => {
        setGameName(event.target.value);
    }

    function Gname(){
        dispatch(gamesName(gameName));
    }

    const games = useSelector(state => state.allG);

    const genn = useSelector(state => state.gen);
    
    const gamesByName = useSelector(state => state.gamesName);

    
    const [form1, setForm1] = useState("todos");
    const [form2, setForm2] = useState("ambas");
    const [form3, setForm3] = useState("ascendente");
    
    var form1_5 = "todos";
    var form2_5 = "ambas";
    var form3_5 = "ascendente";

    const g = games.sort((a, b) => {
        return a.id-b.id
    });

    let [el2, setEl2] = useState(g);

    useEffect(()=>{
        setEl2(g);
    }, [games])

    const handleForm1 = event => {
        setForm1(event.target.value);
        form1_5 = event.target.value;
        
        console.log("Juegos filtrados:", games.filter(sap => form1_5 === "todos" ? sap : sap.generos.some(lal => lal === form1_5 )))
        setEl2(games.filter(sap =>
            form1_5 === "todos" ? sap : sap.generos.some(lal => lal === form1_5) ? sap : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null
        ).sort((a, b) => {
          return form3 === "ascendente" ? a.id-b.id : form3 === "descendente" ? b.id-a.id : form3 === "rating" ? a.rating-b.rating : form3 === "alfabetico" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }));
    }
    
    const handleForm2 = event => {
        setForm2(event.target.value);
        form2_5 = event.target.value;
    
        setEl2(games.filter(sas =>
            form1 === "todos" ? sas : sas.generos.some(lal => lal === form1) ? sas : null
        ).filter(sap => form2_5 === "bd" ? sap.id >= 1715886103809 : form2_5 === "api" ? sap.id < 1715886103809 : form2_5 === "ambas" ? sap : null 
        ).sort((a, b) => {
          return form3 === "ascendente" ? a.id-b.id : form3 === "descendente" ? b.id-a.id : form3 === "rating" ? a.rating-b.rating : form3 === "alfabetico" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }));
    }
    
    const handleForm3 = event => {
        setForm3(event.target.value);
        form3_5 = event.target.value;
    
        setEl2(games.filter(sas =>
            form1 === "todos" ? sas : sas.generos.some(lal => lal === form1) ? sas : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null 
          ).sort((a, b) => {
            return form3_5 === "ascendente" ? a.id-b.id : form3_5 === "descendente" ? b.id-a.id : form3_5 === "rating" ? a.rating-b.rating : form3_5 === "alfabetico" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }));
    }
    
    return(
        <div className='fondoLP2'><br /><br /><br />
            <form onSubmit={submitG}>
                <label style={{color:"#B9935A", fontWeight:"bold", fontSize:"35px"}}>Ingrese el o los juegos que desea buscar: </label>
                <input
                    type="text"
                    name='gameName'
                    key='gameName'
                    value={gameName}
                    onChange={handleChange}
                    style={{backgroundColor:"#FFFFFF", border: "solid 3px #B9935A", borderRadius:"5px", fontWeight:"bold", fontSize:"25px"}}
                />
                <br /><br />
                <button style={{backgroundColor:"rgb(244, 244, 244)", color:"#B9935A", border: "solid 3px", borderRadius:"5px", fontWeight:"bold", fontSize:"25px", cursor:"pointer"}} onClick={Gname} type='submit'>Buscar</button>
            </form>
            <br /><br />
            {gameName !== '' ? gamesByName.length === 0 ? <h4>No hay juegos con ese nombre</h4> : null : null}
            {gamesByName.map((sap)=>(
            <NavLink to={`/detail/${sap.id}`} style={{color:'black'}} key={sap.id}>
                <div style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
                    <h5> Nombre: <br /> {sap.nombre} </h5>
                    <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen}  height="125px"/> </h5>
                    {
                    sap.Generos !== undefined ?
                    <h5> {sap.Generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} <ul>{sap.Generos.map((sa)=><li style={{marginLeft:"0px"}}> {sa.nombre} </li>)}</ul></h5> :
                    <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} <ul>{sap.generos.map((sa)=><li style={{marginLeft:"0px"}}> {sa} </li>)}</ul></h5>
                    }
                </div>
            </NavLink>
            ))}

            <hr style={{width:'95%', height: '12px', backgroundColor:'gray', border:'0', borderRadius:'7px'}}/>

            <br />
            <NavLink to={'/pages/1'} >
                <div className='palabra'>
                    Paginado
                </div>
            </NavLink>

            <div className='palabra-n'>
                Home
            </div>

            <NavLink to={'/newGame'} >
                <div className='palabra'>
                    Crear registro
                </div>
            </NavLink>

            <br /><br />
            <hr style={{width:'95%', height: '12px', backgroundColor:'gray', border:'0', borderRadius:'7px'}}/>

            <form id='form1' className='form1_1'>
                <label for="fil" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Filtrar por tipo: </label>
                    <select name="fil" className='form1' onChange={handleForm1} value={form1} style={{fontSize:"15px"}}>
                    <option value='todos'>Todos</option>
                    {genn.map((sap) =>(
                        <option value={`${sap}`}>{sap}</option>
                    ))}
                </select>
                <br /><br />
                <br />
                <label for="fil" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Filtrar por origen: </label>
                <select name="fil" className='form1' onChange={handleForm2} value={form2} style={{fontSize:"15px"}}>
                    <option value="ambas">Ambas</option>
                    <option value="api">API</option>
                    <option value="bd">Base de datos</option>
                </select>
            </form>
            <br />
            <form className='form1_1'>
                <label for="ord1" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Ordenar: </label>
                <select name="fil" className='form1' onChange={handleForm3} value={form3} style={{fontSize:"15px"}}>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                    <option value="alfabetico">Alfabético</option>
                    <option value="rating">Rating</option>
                </select>
            </form>

            {el2.map((sap)=>(
            <NavLink to={`/detail/${sap.id}`} style={{color:'black'}} key={sap.id}>
                <div style={{cursor:'pointer', backgroundColor:'lightgreen', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
                    <h5> Nombre: <br /> {sap.nombre} </h5>
                    <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen}  height="125px"/> </h5>
                    <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} <ul>{sap.generos.map((sa)=><li style={{marginLeft:"0px"}}> {sa} </li>)}</ul></h5>
                </div>
            </NavLink>
            ))}
        </div>
    )
}