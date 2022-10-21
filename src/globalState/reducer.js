const initialState = {
    score: 0, 
    playerPokemon: null, 
    rivalPokemon: null, 
}

const reducer = (state = initialState, action) => {
  return {
    ...state, 
    ...action.data
  }
}

export {
  reducer,
  initialState
}
