import Context from "../globalState/context"; 
import { useContext, useEffect } from "react";
import { selectPlayerPokemon, selectRivalPokemon } from "../globalState/selectors";

const usePlayerPokemon = () => {
    const { state, dispatch } = useContext(Context);

    const setPlayerPokemon = (playerPokemon) => {
      dispatch({data: {playerPokemon}})
    }

    return [selectPlayerPokemon(state), setPlayerPokemon]
}

const useRivalPokemon = () => {
  const {state, dispatch} = useContext(Context); 

  const setRivalPokemon = (rivalPokemon) => {

    dispatch({data: {rivalPokemon}})
  }

  return [selectRivalPokemon(state), setRivalPokemon]
}

const useScore = () => {
    const { state, dispatch } = useContext(Context)
    const setScore = (score) => dispatch({ data: { score }})
    return [
      selectScore(state),
      setScore
    ]
  }

  export {
    useScore, 
    usePlayerPokemon, 
    useRivalPokemon
  }
//dispatch sender inn et objekt som heter data, inni den funksjonen skal jeg returnere et objekt med datakey
//som skal inneholde playerPokemonID - importer selector selectplayerpokemon- hooken skal returnere den anynyme 
//fuksjonen som setter player pokemon og verdien av selectoren 