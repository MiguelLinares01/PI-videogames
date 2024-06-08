const axios = require("axios");
const URL = "https://api.rawg.io/api/genres?key=ad2603823410452d8a1c7b7351df447c";
const {Generos} = require("../db");

const getGenero = async (req, res)=>{
    try{
        const {data} = await axios.get(URL);
        let id = [];
        let generos = [];
        data.results.forEach(e => {
            id.push(e.id);
            generos.push(e.name)
        });

        for (let i = 0; i < id.length; i++) {
            await Generos.findOrCreate( { where: { id:id[i], nombre:generos[i]} } );
        }

        let generos_array = await Generos.findAll();
        let bd_G = [];
        generos_array.forEach(el => {
            bd_G.push(el.nombre);
        });

        return res.status(200).json(bd_G);
    }
    catch(error){
        return res.status(500).send(error.message)
    }
}

module.exports = getGenero;