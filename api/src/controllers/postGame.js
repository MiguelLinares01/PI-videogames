const axios = require("axios");
const { Videogames } = require("../db");
const { Generos } = require("../db");
const { Plataformas } = require("../db");

const postGame = async (req, res) => {
    try{
        var { nombre, descripcion, plataformas, imagen, lanzamiento, rating, generos } = req.body;
        nombre = nombre.toLowerCase();
        const id = Date.now();
        
        const newGame = await Videogames.create({id, nombre, descripcion, imagen, lanzamiento, rating});
        // if(!generos){return res.status(200).json(newGame);}
        var genero = await Generos.findAll({where:{nombre:generos}});
        
        let generoId = [];
        genero.forEach(t => {
            generoId.push(t.id);
        });
        await newGame.addGeneros(generoId, generos);
        
        var plataformass = await Plataformas.findAll({where:{nombre:plataformas}});

        let plataformasId = [];
        plataformass.forEach(t => {
            plataformasId.push(t.id);
        });
        
        await newGame.addPlataformas(plataformasId, plataformas);
        
        return res.status(200).json(newGame);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
}

module.exports = postGame;