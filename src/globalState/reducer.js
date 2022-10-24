export const initialState = {
    score: 0, 
    playerPokemon: null, 
    rivalPokemon: null, 
    ruleset: null, 
}

const reducer = (state = initialState, action) => {
  return {
    ...state, 
    ...action.data
  }
}

export default reducer;
 
