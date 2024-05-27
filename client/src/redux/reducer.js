import { ALL_GAMES, GAME_ID, NO_ID, GAMES_NAME, GENEROS, PLATAFORMAS, NEW_G } from './action-types';

const initialState = {
    allG: [],
    gameId: [],
    gamesName: [],
    gen: [],
    pla: []
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case ALL_GAMES:
            return {...state, allG: action.payload};
        case GAME_ID:
            return {...state, gameId: action.payload};
        case NO_ID:
            return {...state, gameId: action.payload};
        case GAMES_NAME:
            return {...state, gamesName: action.payload};
        case GENEROS:
            return {...state, gen: action.payload};
        case PLATAFORMAS:
            return {...state, pla: action.payload};
        case NEW_G:
            return {...state};
        default:
            return {...state};
    }
}