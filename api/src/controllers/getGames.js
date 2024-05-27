const axios = require("axios");
var URL = `https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a`;
const {Videogames} = require("../db");
const {Generos} = require("../db");

const getGames = async (req, res) => {
    try{

        let allG = [];
        let URLBeyond = URL;

        while(URLBeyond !== `https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a&page=6`){
            const { data } = await axios.get(URLBeyond);
            allG = [...allG, ...data.results];
            URLBeyond = data.next;
        }
        
        let gamesInfo = allG.map((ge)=>{

            return {
                key: ge.id,
                id: ge.id,
                nombre: ge.name,
                plataformas:ge.platforms.map((sas)=>sas.platform.name),
                imagen: ge.background_image,
                lanzamiento: ge.released,
                rating: ge.rating,
                generos: ge.genres.map((ses)=>ses.name)
            }
        });

        const bdG = await Videogames.findAll({include: Generos});
        let bdG2 = bdG.map((shus) => {
            return {
                key: shus.id,
                id: shus.id,
                nombre: shus.nombre,
                plataformas:shus.plataformas,
                imagen: shus.imagen,
                lanzamiento: shus.lanzamiento,
                rating: shus.rating,
                generos: shus.Generos.map((e)=>{
                    return e.nombre;
                })
            }
        })

        bdG2.forEach(el => {
            gamesInfo.push(el);
        });

        return res.status(200).json(gamesInfo);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = getGames;