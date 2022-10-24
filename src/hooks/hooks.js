import Context from "../globalState/context"; 
import { useContext, useEffect } from "react";
import { selectPlayerPokemon, selectRivalPokemon, selectRoundWinner, selectPlayerScore, selectRivalScore, selectIsChoosingPokemon } from "../globalState/selectors";

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

const useIsChoosingPokemon = () => {
  const {state, dispatch} = useContext(Context); 

  const setIsChoosingPokemon = (isChoosingPokemon) => {
    dispatch({data: {isChoosingPokemon}})
  }

  return [selectIsChoosingPokemon(state), setIsChoosingPokemon]
}

const useRound = () => {
  const [playerPokemon] = usePlayerPokemon(); 
  const [rivalPokemon] = useRivalPokemon(); 
  const [isChoosingPokemon] = useIsChoosingPokemon();  
  const [playerScore, setPlayerScore] = usePlayerScore(); 
  const [rivalScore, setRivalScore] = useRivalScore(); 

  const {state} = useContext(Context); 

  useEffect(() => {

    if(playerPokemon === null || rivalPokemon === null || isChoosingPokemon){
      return; 
    }
    if(selectRoundWinner(state) === "player"){
        setPlayerScore(playerScore + 1); 
    }if(selectRoundWinner(state) === "rival"){
      setRivalScore(rivalScore + 1)
    }

  },     
  [playerPokemon, rivalPokemon, isChoosingPokemon])
  
}

const useBattle = () => {
    const [rivalScore] = useRivalScore(); 
    const [playerScore] = usePlayerScore(); 
}

const usePlayerScore = () => {
    const { state, dispatch } = useContext(Context)
    const setScore = (playerScore) => dispatch({ data: { playerScore }})
    return [
      selectPlayerScore(state),
      setScore
    ]
  }

  const useRivalScore = () => {
    const { state, dispatch } = useContext(Context)
    const setScore = (rivalScore) => dispatch({ data: { rivalScore }})
    return [
      selectRivalScore(state),
      setScore
    ]
  }

  export {
    usePlayerScore, 
    useRivalScore,
    usePlayerPokemon, 
    useRivalPokemon, 
    useRound, 
    useIsChoosingPokemon
  }
//dispatch sender inn et objekt som heter data, inni den funksjonen skal jeg returnere et objekt med datakey
//som skal inneholde playerPokemonID - importer selector selectplayerpokemon- hooken skal returnere den anynyme 
//fuksjonen som setter player pokemon og verdien av selectoren 