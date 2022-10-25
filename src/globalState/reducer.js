import PokemonData from "../data/pokemon.json";

export const initialState = {
    playerScore: 0,
    rivalScore: 0,  
    playerPokemon: null, 
    rivalPokemon: null, 
    ruleset: null, 
    isChoosingPokemon: false, 
    defaultRuleSet: [], 
    customRuleSet: [], 
    isUsingCustomRuleSet: false,
    hasWinner: false
}

const reducer = (state = initialState, action) => {
  return {
    ...state, 
    ...action.data
  }
}

export default reducer;
 
