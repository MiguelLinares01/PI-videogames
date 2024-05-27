const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getGames = require("../controllers/getGames.js");
const getGameByName = require("../controllers/getGameByName.js");
const getGameById = require("../controllers/getGameById.js");
const postGame = require("../controllers/postGame.js");
const getGenero = require("../controllers/getGenero.js");
const getPlatforms = require("../controllers/getPlatforms.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get("/videogames", getGames);
router.get("/videogames/name?", getGameByName);
router.get("/videogames/:id", getGameById);
router.post("/videogames", postGame);
router.get("/generos", getGenero);
router.get("/plataformas", getPlatforms);

module.exports = router;
