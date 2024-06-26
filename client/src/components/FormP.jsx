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
    const [xd, setXd] = useState(false);
    const carEsp = /[!¡{}@#$%^&*.,<>/\\'\";?¿]/;

    useEffect(() => {
        dispatch(generos());
        dispatch(plat());
    }, [])

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

        checked ? input.generos[name] = value : input.generos[name] = "no"

        setErrors2(
            validate2([checked ? value : "no"])
        )
    }

    const change3 = event => {
        const {name, value, checked} = event.target;
        
        checked ? input.plataformas[name] = value : input.plataformas[name] = "no"

        setErrors3(
            validate3([checked ? value : "no"])
        )
    }

    const bruh = () => {
        console.log("QUEEEEEEEEEEEEE")
        setXd(true)
    }
    
    const preNewG = () => {

        console.log("SIIIIIII")        
        dispatch(new_g(input));
        console.log("QUE FUE");
        alert("JUEGO CREADO EN LA BASE DE DATOS");
        console.log("QUE FUE 2");
        navigate(`/home`);

    }
    
    const [input, setInput] = useState({
        
        nombre: "\n",
        descripcion: "Escriba aquí su descripción",
        plataformas: ["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"],
        imagen: "\n",
        lanzamiento: "1953-01-01",
        rating: "1",
        generos: ["no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no", "no"]
        
    });
    console.log(input)
    
    const [errors, setErrors] = useState({});
    const [errors2, setErrors2] = useState({});
    const [errors3, setErrors3] = useState({});
    
    
    console.log(JSON.stringify(errors) === "{}", JSON.stringify(errors2) === "{}",  JSON.stringify(errors3) === "{}", input.nombre !== "\n", input.imagen !== "\n", input.descripcion !== "", input.lanzamiento !== "", input.rating >= 1 || input.rating <= 5)
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
                <input type="date" key='lanzamiento' id='lanzamiento' name='lanzamiento' value={input.lanzamiento} onChange={change} className='duvvv1_5' style={{fontSize:'20px'}} min='1953-01-01' max='2024-01-01'/> <kk style={{color:"coral", margin:0}}> {errors.lanzamiento ? errors.lanzamiento : null} {errors.lanzamiento ? (<br />) : null}</kk> 
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
            </div><br />
            {xd && (input.nombre==="" || input.nombre==="\n" || input.imagen==="" || input.imagen==="\n" || input.descripcion==="" || input.lanzamiento==="" || input.lanzamiento==="\n" || input.rating < 1 || input.rating > 5 || input.plataformas.filter((lal) => lal !== "no").length === 0 || input.generos.filter((lal) => lal !== "no").length === 0) ?
                <div style={{backgroundColor:'white', border:'solid 4px #3e3e3e', borderRadius:'15px', padding:'25px', display:'inline-block',  color:"coral", margin:0, fontSize:'22px'}}>
                    {input.nombre==="" || input.nombre==="\n" ? "Se require de un nombre" : null} {input.nombre==="" || input.nombre==="\n" ? <br /> : null}
                    {carEsp.test(input.nombre)===true ? "Se require que el juego no tenga caracteres especiales ([!¡{}@#$%^&*.,<>/\\'\";?¿])" : null} {carEsp.test(input.nombre)===true ? <br /> : null}
                    {input.imagen==="" || input.imagen==="\n" ? "Se require de una imagen" : null} {input.imagen==="" || input.imagen==="\n" ?  <br /> : null}
                    {input.descripcion==="" ? "Se require de una descripcion" : null} {input.descripcion==="" ? <br /> : null}
                    {input.lanzamiento==="" || input.lanzamiento==="\n" ? "Se require de un lanzamiento" : null} {input.lanzamiento==="" || input.lanzamiento==="" ? <br /> : null}
                    {input.rating < 1 || input.rating > 5 ? "Se require de un rating mayor a 1 y menor que 5" : null} {input.rating < 1 || input.rating > 5 ? <br /> : null}
                    {input.plataformas.filter((lal) => lal !== "no").length === 0 ? "Se require de una plataforma para el juego" : null} {input.plataformas.filter((lal) => lal !== "no").length === 0  ? <br /> : null}
                    {input.generos.filter((lal) => lal !== "no").length === 0 ? "Se require de un género para el juego" : null} {input.generos.filter((lal) => lal !== "no").length === 0  ? <br /> : null}
                </div>
            : null} <br /><br />
            {JSON.stringify(errors) === "{}" && JSON.stringify(errors2) === "{}" && JSON.stringify(errors3) === "{}" && input.nombre !== "\n" && input.imagen !== "\n" && input.descripcion !== "" && input.lanzamiento !== "" && input.rating >= 1 && input.rating <= 5 && input.plataformas.filter((lal) => lal !== "no").length !== 0 && input.generos.filter((lal) => lal !== "no").length !== 0 ? <button className='palabra' type='submit' onClick={preNewG} style={{cursor:"pointer"}}>Juego listo!!!</button> : null}
            </form>
            {JSON.stringify(errors) === "{}" && JSON.stringify(errors2) === "{}" && JSON.stringify(errors3) === "{}" && input.nombre !== "\n" && input.imagen !== "\n" && input.descripcion !== "" && input.lanzamiento !== "" && input.rating >= 1 && input.rating <= 5 && input.plataformas.filter((lal) => lal !== "no").length !== 0 && input.generos.filter((lal) => lal !== "no").length !== 0 ? null :<button type='text' onClick={bruh} style={{cursor:"pointer"}} className='palabra'>Juego listo!!!</button>}
            <br /><br />
        </div>
    )
}