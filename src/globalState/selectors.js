import { Pokemon } from "../data/pokemon.json";

const selectScore = (state) => state.score; 

const selectPlayerPokemon = (state) => Pokemon.find(({id}) => id === state.playerPokemon);  

const selectRivalPokemon = (state) => Pokemon.find(({id}) => id === state.rivalPokemon);  

export {
    selectScore, 
    selectPlayerPokemon, 
    selectRivalPokemon
}