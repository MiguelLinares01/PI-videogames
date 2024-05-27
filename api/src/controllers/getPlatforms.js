const axios = require("axios");
var URL = `https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a`;
const {Plataformas} = require("../db");

const getGames = async (req, res) => {
    try{

        let allG = [];
        let URLBeyond = URL;
        let allP = [];

        while(URLBeyond !== `https://api.rawg.io/api/games?key=4a8904dc6b544231a6ab84c59cd7128a&page=6`){
            const { data } = await axios.get(URLBeyond);
            allG = [...allG, ...data.results];
            URLBeyond = data.next;
        }
        
        allG.map((ge)=>ge.platforms.map((sas)=>allP.push(sas.platform.name)));

        const noDup = [...new Set(allP)];

        for (let i = 0; i < noDup.length; i++) {
            await Plataformas.findOrCreate( { where: { id:i+1, nombre:noDup[i]} } );
        }

        return res.status(200).json(noDup);
    }
    catch(error){
        return res.status(500).send(error.message);
    }
};

module.exports = getGames;