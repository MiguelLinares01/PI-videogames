import { ALL_GAMES, GAME_ID, NO_ID, GAMES_NAME, GENEROS, PLATAFORMAS, NEW_G } from "./action-types";
import axios from 'axios';

export const allGames = () => {
    const point = `http://localhost:3001/videogames`;
    return async (distpatch) => {
        try{
            let { data } = await axios.get(point);
            data.key = data.id;
            return distpatch({
                type: ALL_GAMES,
                payload: data
            })
        }
        catch(error){
            return distpatch({
                type: Error,
                payload: error.message
            })
        }
    }
};

export const findId = (id) => {
    const elId = `http://localhost:3001/videogames/${id}`;
    return async (dispatch) => {
        try{
            const { data } = await axios.get(elId);
            data.map(e=>e.key=e.id);
            return dispatch({
                type: GAME_ID,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
};

export const noId = () => {
    return async (dispatch) => {
        try{
            return dispatch({
                type: NO_ID,
                payload: []
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
};

export const gamesName = (name) => {
    const elName = `http://localhost:3001/videogames/name?name=${name}`;
    return async (dispatch) => {
        try{
            let { data } = await axios.get(elName);
            data.map(e => e.key = e.id);
            return dispatch({
                type: GAMES_NAME,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
}

export const generos = () => {
    const gen = `http://localhost:3001/generos`;
    return async (dispatch) => {
        try{
            let { data } = await axios.get(gen);
            return dispatch({
                type: GENEROS,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
}

export const plat = () => {
    const plata = `http://localhost:3001/plataformas`;
    return async (dispatch) => {
        try{
            let { data } = await axios.get(plata);
            return dispatch({
                type: PLATAFORMAS,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
}

export const new_g = (gamme) => {
    const ppoint = `http://localhost:3001/videogames`;
    return async (dispatch) => {
        try{
            const { data } = await axios.post(ppoint, gamme);
            return dispatch({
                type: NEW_G,
                payload: data
            })
        }
        catch(error){
            return dispatch({
                type: Error,
                payload: error.message
            })
        }
    }
}