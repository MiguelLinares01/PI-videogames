const axios = require("axios");
const URL = 'https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a';
const { Videogames } = require("../db");
const { Generos } = require("../db");

const getGameByName = async (req, res) => {

    try{
        let nombre = req.query.name;
        nombre = nombre.toLowerCase();
        let quince = [];

        let URLBeyond = URL;

        while(quince.length<=14 && URLBeyond !== 'https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a&page=6'){
            const { data } = await axios.get(URLBeyond);
            data.results.map((sus)=>{
                if(sus.name.toLowerCase().includes(nombre)) quince.push({
                    id:sus.id,
                    nombre:sus.name,
                    plataformas:sus.platforms.map((sas)=>{return sas.platform.name}),
                    imagen:sus.background_image,
                    lanzamiento:sus.released,
                    rating:sus.rating,
                    generos:sus.genres.map((ses)=>{return ses.name})
                });                
            })
            URLBeyond = data.next;
        }

        let alo = await Videogames.findAll({where:{nombre:nombre}, include: Generos});
        var c = 0;
        if(quince.length<15){
            for(let i=quince.length; i<=15; i++){
                if(alo[c] !== undefined){
                    quince.push(alo[c]);
                    c+=1;
                }
            }
        }
        
        return res.status(200).send(quince);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = getGameByName;