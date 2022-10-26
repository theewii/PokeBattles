import PokemonData from "../data/pokemon.json";

export const initialState = {
    playerScore: 0,
    rivalScore: 0,  
    playerPokemon: null, 
    rivalPokemon: null, 
    isChoosingPokemon: false, 
    defaultRuleSet: [], 
    customRuleSet: [],   //For potential further development, not in use now
    isUsingCustomRuleSet: false,  //For potential further development, not in use now
    hasWinner: false,
    battleState: "Choosing pokemon..."
}

const reducer = (state = initialState, action) => {
  return {
    ...state, 
    ...action.data
  }
}

export default reducer;
 
