import React, { useEffect, useState } from 'react';
import { generos, plat, new_g } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import validate from '../utils/validate-FormP';
import validate2 from '../utils/validate-FormP2';
import validate3 from '../utils/validate-Form3P';

export default function DetailP(){

    const dispatch = useDispatch();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(generos());
        dispatch(plat());
    }, [])

    const [gen, setGen] = useState(["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"]);
    const [platt, setPlatt] = useState(["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"]);

    const change = event => {
        const {name, value} = event.target;
        setInput({
            ...input,
            [name]:value
        })
        setErrors(
            validate({...input, [name]: value})
        )
    }

    const genn = useSelector(state => state.gen);
    const pla = useSelector(state => state.pla);


    const change2 = event => {
        const {name, value, checked} = event.target;
        setGen(prevGen => ({
            ...prevGen,
            [name]: checked ? value : "no"
        }))
        setErrors2(
            validate2({...gen, [name]: checked ? value : "no"})
        )
    }

    const change3 = event => {
        const {name, value, checked} = event.target;
        setPlatt(prevGen => ({
            ...prevGen,
            [name]: checked ? value : "no"
        }))
        setErrors3(
            validate3({...platt, [name]: checked ? value : "no"})
        )
    }

    const preNewG = () => {
        setInput({...input, generos:Object.values(gen).filter((la) => la !== "no")});
        setInput({...input, generos:Object.values(platt).filter((la) => la !== "no")});
        dispatch(new_g(input));
        alert("JUEGO CREADO EN LA BASE DE DATOS");
        navigate(`/home`);
    }
    
    const [input, setInput] = useState({
        
        nombre: "\n",
        descripcion: "Escriba aquí su descripción",
        plataformas: [],
        imagen: "\n",
        lanzamiento: "\n",
        rating: "1",
        generos: []
        
    });
    
    const [errors, setErrors] = useState({});
    const [errors2, setErrors2] = useState({});
    const [errors3, setErrors3] = useState({});

    return(
        <div className='fondoLP2'>
            <br /><br />
            <NavLink to={'/home'} >
                <div className='palabra'>
                    Home
                </div>
            </NavLink> 

            <div className='palabra-n'>
                Crear registro
            </div>

            <br /><br />
            <hr style={{width:'95%', height: '12px', backgroundColor:'gray', border:'0', borderRadius:'7px'}}/>
            <br /><br />

            <h1 style={{color: '#B9935A', fontWeight:'900', fontSize:'45px'}}>Nuevo juego: </h1>

            <form action="">
            <div className='duvvv'>
                <b style={{fontSize:'22px'}}>Nombre: </b> <kk style={{color:"coral", margin:0}}>{errors.nombre ? (<div><br /></div> ) : null} </kk><br />
                <b style={{fontSize:'22px'}}>Descripción: </b> <kk style={{color:"coral", margin:0}}>{errors.descripcion ? (<div><br /></div> ) : null} </kk><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <b style={{fontSize:'22px'}}>Plataformas jugables: </b> <br /><br /><br /><br /><br /><br /><kk style={{color:"coral", margin:0}}> {errors3.plataformas ? (<div> <br /><br /><br /> </div>) : null}</kk>
                <b style={{fontSize:'22px'}}>Imagen representativa: </b> <kk style={{color:"coral", margin:0}}>{errors.imagen ? (<div><br /></div> ) : null} </kk> <br />
                <b style={{fontSize:'22px'}}>Fecha de lanzamiento: </b> <kk style={{color:"coral", margin:0}}>{errors.lanzamiento ? (<div><br /></div> ) : null} </kk> <br />
                <b style={{fontSize:'22px'}}>Rating: </b> <kk style={{color:"coral", margin:0}}>{errors.rating ? (<div><br /> </div> ) : null} </kk> <br /><br /><br /><br /><br />
                <b style={{fontSize:'22px'}}>Géneros: </b> <br /><br /><br /><br /><br /><kk style={{color:"coral", margin:0}}>{errors2.generos ? (<div style={{fontSize:"18px"}}> <br /><br /><br />  </div>) : null}</kk>
            </div>
            <div className='duvvv'>
                <input type="text" key='nombre' id='nombre' name='nombre' value={input.nombre} onChange={change} className='duvvv1_5' style={{fontSize:'20px'}}/> <kk style={{color:"coral", margin:0}}> {errors.nombre ? errors.nombre : null} {errors.nombre ? (<div><br /></div>) : null}</kk>
                <textarea type="text" key='descripcion' id='descripcion' name='descripcion' value={input.descripcion} onChange={change} maxLength='255' className='duvvv2' style={{fontSize:'20px'}}/> <kk style={{color:"coral", margin:0}}> {errors.descripcion ? errors.descripcion : null} {errors.descripcion ? (<div><br /></div>) : null}</kk> <div style={{fontSize:"8px"}}><br /></div>
                <div>
                    <ul>
                    {pla.map((sus, index)=>(
                        <li key={index} style={{display:"inline-block", marginRight:"15px"}}>
                            <input key={sus} id={sus} name={index} type="checkbox" value={sus} onChange={change3}/>
                            <label htmlFor="" style={{fontSize:"15px", fontWeight:"bold"}}>{sus}</label>
                        </li>
                    ))}
                    </ul><kk style={{color:"coral", margin:0}}> {errors3.plataformas ? errors3.plataformas : null} {errors3.plataformas ? (<div><br /><br /></div>) : null}</kk>
                </div> 
                <input type="text" key='imagen' id='imagen' name='imagen' value={input.imagen} onChange={change} className='duvvv1_5' style={{fontSize:'20px'}}/> <kk style={{color:"coral", margin:0}}> {errors.imagen ? errors.imagen : null} {errors.imagen ? (<div><br /></div>) : null}</kk>
                <input type="text" key='lanzamiento' id='lanzamiento' name='lanzamiento' value={input.lanzamiento} onChange={change} className='duvvv1_5' style={{fontSize:'20px'}}/> <kk style={{color:"coral", margin:0}}> {errors.lanzamiento ? errors.lanzamiento : null} {errors.lanzamiento ? (<br />) : null}</kk> 
                <input type="number" key='rating' id='rating' name='rating' value={input.rating} onChange={change} min="1" max="5" className='duvvv1_5' style={{fontSize:'20px'}}/> <kk style={{color:"coral", margin:0}}> {errors.rating ? errors.rating : null} {errors.rating ? (<div><br /></div>) : null}</kk><br />
                <div>
                    <ul>
                    {genn.map((sus, index)=>(
                        <li key={index} style={{display:"inline-block", marginRight:"15px"}}>
                            <input key={sus} id={sus} name={index} type="checkbox" value={sus} onChange={change2}/>
                            <label htmlFor="" style={{fontSize:"15px", fontWeight:"bold"}}>{sus}</label>
                        </li>
                    ))}
                    </ul><kk style={{color:"coral", margin:0}}> {errors2.generos ? errors2.generos : null} {errors2.generos ? (<div><br /> </div>) : null}</kk>
                </div>                
            </div><br /><br /><br /><br />
            {JSON.stringify(errors) === "{}" && JSON.stringify(errors2) === "{}" && JSON.stringify(errors3) === "{}" && input.nombre !== "\n" && input.imagen !== "\n" && input.descripcion !== "" && input.lanzamiento !== "\n" && Object.values(gen).filter((la) => la !== "no").length !== 0 && Object.values(platt).filter((la) => la !== "no").length !== 0 ? <button className='palabra' type='submit' onClick={preNewG} style={{cursor:"pointer"}}>Juego listo!!!</button> : <button disabled className='palabra'>Juego listo!!!</button>}
            </form>
        </div>
    )
}