const axios = require("axios");
const URLp1 = "https://api.rawg.io/api/games/"
const URLp2 = "?key=ad2603823410452d8a1c7b7351df447c";
const { Videogames } = require("../db");
const { Generos } = require("../db");
const { Plataformas } = require("../db");

const getGameById = async (req, res) => {
    try{
        let gameInfo = [];
        const gameId = req.params.id;

        if(gameId <1715688183326){
    
            const { data } = await axios.get(`${URLp1}${gameId}${URLp2}`);
            fetch(`${URLp1}${gameId}${URLp2}`)
            .then(res => res.data)
            .then(data => data)
            gameInfo.push({
                id:data.id,
                nombre:data.name,
                descripcion:data.description,
                plataformas:data.platforms.map((sas)=>{return sas.platform.name}),
                imagen:data.background_image,
                lanzamiento:data.released,
                rating:data.rating,
                generos:data.genres.map((ses)=>{return ses.name})
            });
        }
        else{
            let ol = await Videogames.findOne({where:{id:gameId}, include:[Plataformas, Generos]});
            if(ol !== null){
                gameInfo.push(ol);
                // ol.plataformas = JSON.parse(ol.plataformas);
            }
        }

        if(gameInfo.length === 0){return res.status(200).json('No hay algún juego con ese id')};
        return res.status(200).json(gameInfo);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = getGameById;