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
    
    
    var [xd, setXd] = useState({lala:0})

    var [xd2, setXd2] = useState({lolo:0})
    
    const handleChange = event => {
        setGameName(event.target.value);
    }

    const gamesByName = useSelector(state => state.gamesName);
    
    const [el3, setEl3] = useState(gamesByName);
    
    function Gname(){

        setPage2({number:1})
        
        setEl3(gamesByName);
        console.log("el3", el3)
        
        dispatch(gamesName(gameName));
        
        xd2.lolo = 1

        setEl3(gamesByName.slice(inicio2, final2))

        setMaxP2(Math.ceil(gamesByName.length) / 15)
        
    }
    

    lala()

    function lala(){
        gamesByName.length !== 0 ? xd.lala = 1 : xd.lala = -1
    }
    
    const [page, setPage] = useState({number:1});
    const [page2, setPage2] = useState({number:1});
    
    const perPage = 15;
    var inicio = (page.number-1) * perPage;
    var final = inicio + perPage;

    var inicio2 = (page2.number-1) * perPage;
    var final2 = inicio2 + perPage;
    
    
    const games = useSelector(state => state.allG);
    const genn = useSelector(state => state.gen);
    const [maxP, setMaxP] = useState(Math.ceil(games.length / 15));
    const [maxP2, setMaxP2] = useState(Math.ceil(gamesByName.length / 15));
    console.log("LOCOOOO", Math.ceil(gamesByName.length / 15))
    
    const [form1, setForm1] = useState("todos");
    const [form2, setForm2] = useState("ambas");
    const [form3, setForm3] = useState("rating1-5");
    
    var form1_5 = "todos";
    var form2_5 = "ambas";
    var form3_5 = "rating1-5";
    
    const g = games.sort((a, b) => {
        return a.rating-b.rating
    }).slice(inicio, final);
    const [el2, setEl2] = useState(g);
    
    // const [games2, setGames2] = useState(
    // games.filter(sap =>
    //     form1_5 === "todos" ? sap : sap.generos.some(lal => lal === form1_5) ? sap : null
    // ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null
    // ).sort((a, b) => {
    //   return form3 === "ascendente" ? a.id-b.id : form3 === "descendente" ? b.id-a.id : form3 === "rating" ? a.rating-b.rating : form3 === "alfabetico" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
    // }));
    
    useEffect(()=>{
        setEl2(g);
    }, [games])


    const maspage1 = () => {
        page.number=Number(page.number)+1
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
        handleForm4()
    }

    const maspage2 = () => {
        page.number=Number(page.number)+2
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
        handleForm4()
    }

    const menospage1 = () => {
        page.number=Number(page.number)-1
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
        handleForm4()
    }

    const menospage2 = () => {
        page.number=Number(page.number)-2
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
        handleForm4()
    }

    const maspage1_2 = () => {
        page2.number=Number(page2.number)+1
        inicio2 = (Number(page2.number)-1) * perPage;
        final2 = inicio2 + perPage;
        setEl3(gamesByName.slice(inicio2, final2))

        
        setEl3(gamesByName);
        console.log("el3", el3)
        
        dispatch(gamesName(gameName));
        
        xd2.lolo = 1

        setEl3(gamesByName.slice(inicio2, final2))

        setMaxP2(Math.ceil(gamesByName.length) / 15)
    }

    const maspage2_2 = () => {
        page.number=Number(page2.number)+2
        inicio2 = (Number(page2.number)-1) * perPage;
        final2 = inicio2 + perPage;
        setEl3(gamesByName.slice(inicio2, final2))
        
        
        setEl3(gamesByName);
        console.log("el3", el3)
        
        dispatch(gamesName(gameName));
        
        xd2.lolo = 1

        setEl3(gamesByName.slice(inicio2, final2))

        setMaxP2(Math.ceil(gamesByName.length) / 15)
    }

    const menospage1_2 = () => {
        page.number=Number(page2.number)-1
        inicio2 = (Number(page2.number)-1) * perPage;
        final2 = inicio2 + perPage;
        setEl3(gamesByName.slice(inicio2, final2))

        
        setEl3(gamesByName);
        console.log("el3", el3)
        
        dispatch(gamesName(gameName));
        
        xd2.lolo = 1

        setEl3(gamesByName.slice(inicio2, final2))

        setMaxP2(Math.ceil(gamesByName.length) / 15)
    }

    const menospage2_2 = () => {
        page2.number=Number(page2.number)-2
        inicio2 = (Number(page2.number)-1) * perPage;
        final2 = inicio2 + perPage;
        setEl3(gamesByName.slice(inicio2, final2))

        
        setEl3(gamesByName);
        console.log("el3", el3)
        
        dispatch(gamesName(gameName));
        
        xd2.lolo = 1

        setEl3(gamesByName.slice(inicio2, final2))

        setMaxP2(Math.ceil(gamesByName.length) / 15)
    }

    useEffect(()=>{
        setMaxP(Math.ceil(games.filter(sap =>
            form1 === "todos" ? sap : sap.generos.some(lal => lal === form1) ? sap : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null
        ).sort((a, b) => {
            return form3 === "rating1-5" ? a.rating-b.rating :
            form3 === "rating5-1" ? b.rating-a.rating : 
            form3 === "alfabeticoz-a" ? b.nombre.toLowerCase()<a.nombre.toLowerCase() ? -1 : b.nombre.toLowerCase()>a.nombre.toLowerCase() ? 1 : 0 :
            form3 === "alfabeticoa-z" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }).length / 15))

    }, [el2])

    const handleForm1 = event => {
        xd2.lolo = 0
        console.log(xd2.lolo)
        setForm1(event.target.value);
        form1_5 = event.target.value;

        setPage({number:1})
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
        
        // console.log("Juegos filtrados:", games.filter(sap => form1_5 === "todos" ? sap : sap.generos.some(lal => lal === form1_5 )))
        setEl2(games.filter(sap =>
            form1_5 === "todos" ? sap : sap.generos.some(lal => lal === form1_5) ? sap : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null
        ).sort((a, b) => {
            return form3 === "rating1-5" ? a.rating-b.rating :
            form3 === "rating5-1" ? b.rating-a.rating : 
            form3 === "alfabeticoz-a" ? b.nombre.toLowerCase()<a.nombre.toLowerCase() ? -1 : b.nombre.toLowerCase()>a.nombre.toLowerCase() ? 1 : 0 :
            form3 === "alfabeticoa-z" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }).slice(inicio, final));

        console.log(page.number, el2)

    }


    const handleForm2 = event => {
        xd2.lolo = 0
        setForm2(event.target.value);
        form2_5 = event.target.value;

        setPage({number:1})
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
    
        setEl2(games.filter(sas =>
            form1 === "todos" ? sas : sas.generos.some(lal => lal === form1) ? sas : null
        ).filter(sap => form2_5 === "bd" ? sap.id >= 1715886103809 : form2_5 === "api" ? sap.id < 1715886103809 : form2_5 === "ambas" ? sap : null 
        ).sort((a, b) => {
            return form3 === "rating1-5" ? a.rating-b.rating :
            form3 === "rating5-1" ? b.rating-a.rating : 
            form3 === "alfabeticoz-a" ? b.nombre.toLowerCase()<a.nombre.toLowerCase() ? -1 : b.nombre.toLowerCase()>a.nombre.toLowerCase() ? 1 : 0 :
            form3 === "alfabeticoa-z" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }).slice(inicio, final));
        // return form3 === "ascendente" ? a.id-b.id : form3 === "descendente" ? b.id-a.id : form3 === "rating" ? a.rating-b.rating : form3 === "alfabetico" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
    }
    
    const handleForm3 = event => {
        xd2.lolo = 0
        setForm3(event.target.value);
        form3_5 = event.target.value;

        setPage({number:1})
        inicio = (Number(page.number)-1) * perPage;
        final = inicio + perPage;
    
        setEl2(games.filter(sas =>
            form1 === "todos" ? sas : sas.generos.some(lal => lal === form1) ? sas : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null 
          ).sort((a, b) => {
            return form3_5 === "rating1-5" ? a.rating-b.rating :
            form3_5 === "rating5-1" ? b.rating-a.rating : 
            form3_5 === "alfabeticoz-a" ? b.nombre.toLowerCase()<a.nombre.toLowerCase() ? -1 : b.nombre.toLowerCase()>a.nombre.toLowerCase() ? 1 : 0 :
            form3_5 === "alfabeticoa-z" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }).slice(inicio, final));

    }

    const handleForm4 = () => {
        setEl2(games.filter(sas =>
            form1 === "todos" ? sas : sas.generos.some(lal => lal === form1) ? sas : null
        ).filter(sap => form2 === "bd" ? sap.id >= 1715886103809 : form2 === "api" ? sap.id < 1715886103809 : form2 === "ambas" ? sap : null 
          ).sort((a, b) => {
            return form3 === "rating1-5" ? a.rating-b.rating :
            form3 === "rating5-1" ? b.rating-a.rating : 
            form3 === "alfabeticoz-a" ? b.nombre.toLowerCase()<a.nombre.toLowerCase() ? -1 : b.nombre.toLowerCase()>a.nombre.toLowerCase() ? 1 : 0 :
            form3 === "alfabeticoa-z" ? a.nombre.toLowerCase()<b.nombre.toLowerCase() ? -1 : a.nombre.toLowerCase()>b.nombre.toLowerCase() ? 1 : 0 : null
        }).slice(inicio, final));
    }
    
    return(
        <div className='fondoLP2'>
            <br />
            <div className='palabra-n'>
                Home
            </div>

            <NavLink to={'/newGame'} >
                <div className='palabra'>
                    Crear registro
                </div>
            </NavLink>

            <br />  
            
            {/* <form onSubmit={submitG}>
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
                <button style={{backgroundColor:"#3e3e3e", color:"#B9935A", border: "solid 4px", borderRadius:"15px", fontWeight:"bold", fontSize:"25px", cursor:"pointer", padding:"10px"}} onClick={Gname} type='submit'>Buscar</button>
            </form> */}
        
            <br />

            
            <br />
            <div className='buk'>

            <form onSubmit={submitG} style={{display:"inline-block"}}>
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
                <button style={{backgroundColor:"#3e3e3e", color:"#B9935A", border: "solid 4px", borderRadius:"15px", fontWeight:"bold", fontSize:"25px", cursor:"pointer", padding:"10px"}} onClick={Gname} type='submit'>Buscar</button>
            </form>
            <div style={{display:"inline-block", marginLeft:"25px"}}>
                <form id='form1' className='form1_1' style={{display:"inline-block"}}>
                    <label for="fil" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Filtrar por tipo: </label>
                        <select name="fil" className='form1' onChange={handleForm1} value={form1} style={{fontSize:"20px"}}>
                        <option value='todos'>Todos</option>
                        {genn.map((sap) =>(
                            <option value={`${sap}`}>{sap}</option>
                        ))}
                    </select>
                    <br /><br />
                    <br />
                    <label for="fil" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Filtrar por origen: </label>
                    <select name="fil" className='form1' onChange={handleForm2} value={form2} style={{fontSize:"20px"}}>
                        <option value="ambas">Ambas</option>
                        <option value="api">API</option>
                        <option value="bd">Base de datos</option>
                    </select>
                </form>
                <br /><br />
                <form className='form1_1' style={{display:"inline-block"}}>
                    <label for="ord1" style={{color:"#B9935A", fontWeight:"bold", fontSize:"25px"}}>Ordenar: </label>
                    <select name="fil" className='form1' onChange={handleForm3} value={form3} style={{fontSize:"20px"}}>
                        <option value="rating1-5">Rating ascendente</option>
                        <option value="rating5-1">Rating descendente</option>
                        <option value="alfabeticoa-z">Alfabético ascendente</option>
                        <option value="alfabeticoz-a">Alfabético descendente</option>
                    </select>
                </form>

                </div>
            </div> <br /><br /><br />
            {xd2.lolo !== 1 ?
            <div className='palabra-n'>
                Página {page.number}
            </div> :
            <div className='palabra-n'>
                Página {page2.number}
            </div>}
            <br />

            {gameName !== '' ? xd.lala === -1 ? <h4 style={{color:"#B9935A", fontSize:"30px", fontWeight:"bold"}}>No hay juegos con ese nombre</h4> : null : null}
            {xd2.lolo !== 0 ? el3.map((sap)=>(
                <NavLink to={`/detail/${sap.id}`} style={{color:'black', fontSize:'21px'}} key={sap.id}>
                <div style={{cursor:'pointer', backgroundColor:'#7a7a7a', border:'solid 4px #B9935A', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
                    <h5> Nombre: <br /> {sap.nombre} </h5>
                    <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen}  height="125px"/> </h5>
                    {
                        sap.Generos !== undefined ?
                        <h5> {sap.Generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} {sap.Generos.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa.nombre} </lal>)}</h5> :
                        <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} {sap.generos.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa} </lal>)}</h5>
                    }
                </div>
            </NavLink>
            )) : null}

            <br /><br />

            {xd2.lolo !== 1 ? el2.map((sap)=>(
            <NavLink to={`/detail/${sap.id}`} style={{color:'black', fontSize:'21px'}} key={sap.id}>
                <div style={{cursor:'pointer', backgroundColor:'#7a7a7a', border:'solid 4px #B9935A', padding:'10px', margin:'20px', borderRadius:'20px', display:'inline-block'}}>
                    <h5> Nombre: <br /> {sap.nombre} </h5>
                    <h5> Imagen: <br /> <img src={sap.imagen} alt={sap.imagen}  height="125px"/> </h5>
                    <h5> {sap.generos.length > 1 ? <ola>Géneros:</ola> : <ola> Género:</ola>} {sap.generos.map((sa)=><lal style={{marginLeft:"0px"}}> <br /> {sa} </lal>)}</h5>
                </div>
            </NavLink>
            )) : null}
            {console.log(xd2.lolo)}
            {xd2.lolo !== 1 ? <div className='center'>
                {Number(page.number) - 1 < 1 ? null : <div className='izquierda' style={{cursor: 'pointer'}} onClick={menospage1}> {Number(page.number)-1} </div>}
                {Number(page.number) - 2 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={menospage2}> {Number(page.number)-2} </div>}
                {Number(page.number) - 1 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={menospage1}> {Number(page.number)-1} </div>}
                <div className='numbero'> {Number(page.number)} </div>
                {Number(page.number) + 1 > maxP ? null :<div className='numbero' style={{cursor: 'pointer'}} onClick={maspage1}> {Number(page.number)+1} </div>}
                {Number(page.number) + 2 > maxP ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={maspage2}> {Number(page.number)+2} </div>}
                {Number(page.number) + 1 > maxP ? null : <div className='derecha' style={{cursor: 'pointer'}} onClick={maspage1}> {Number(page.number)+1} </div>}
            </div> : null}
            {console.log(maxP2)}
            {xd2.lolo === 1 ? <div className='center'>
                {Number(page2.number) - 1 < 1 ? null : <div className='izquierda' style={{cursor: 'pointer'}} onClick={menospage1_2}> {Number(page2.number)-1} </div>}
                {Number(page2.number) - 2 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={menospage2_2}> {Number(page2.number)-2} </div>}
                {Number(page2.number) - 1 < 1 ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={menospage1_2}> {Number(page2.number)-1} </div>}
                <div className='numbero'> {Number(page2.number)} </div>
                {Number(page2.number) + 1 > Math.ceil(maxP2) ? null :<div className='numbero' style={{cursor: 'pointer'}} onClick={maspage1_2}> {Number(page2.number)+1} </div>}
                {Number(page2.number) + 2 > Math.ceil(maxP2) ? null : <div className='numbero' style={{cursor: 'pointer'}} onClick={maspage2_2}> {Number(page2.number)+2} </div>}
                {Number(page2.number) + 1 > Math.ceil(maxP2) ? null : <div className='derecha' style={{cursor: 'pointer'}} onClick={maspage1_2}> {Number(page2.number)+1} </div>}
            </div> : null}
            {console.log(el3)}
            {console.log("page2", page2.number)}
        </div>
    )
}