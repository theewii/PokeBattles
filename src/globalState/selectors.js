import Pokemon  from "../data/pokemon.json";
import pokeTypes  from "../data/pokeTypes.json";

const selectScore = (state) => state.score; 

const selectPlayerPokemon = (state) => Pokemon.find(({id}) => id === state.playerPokemon) || null;  

const selectRivalPokemon = (state) => Pokemon.find(({id}) => id === state.rivalPokemon) || null; 

const selectPokeType = (state) => pokeTypes.find(({type}) => type === state.type); 

export {
    selectScore, 
    selectPlayerPokemon, 
    selectRivalPokemon, 
    selectPokeType
}