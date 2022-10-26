import Context from "../globalState/context"; 
import { useContext, useEffect } from "react";
import { selectPlayerPokemon, selectRivalPokemon, selectRoundWinner, selectPlayerScore, selectRivalScore, selectIsChoosingPokemon, selectCustomRuleSet, selectDefaultRuleSet, selectIsUsingCustomRuleSet } from "../globalState/selectors";
import { initialState } from "../globalState/reducer"

const usePlayerPokemon = () => {
    const { state, dispatch } = useContext(Context);

    const setPlayerPokemon = (playerPokemon) => {
      dispatch({data: {playerPokemon, battleState:"Rival choosing pokemon..."}})
    }

    return [selectPlayerPokemon(state), setPlayerPokemon]
}

const useRivalPokemon = () => {
  const {state, dispatch} = useContext(Context); 

  const setRivalPokemon = (rivalPokemon) => {

    dispatch({data: {rivalPokemon, battleState:"Ready to battle!"}})
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

//For potential further development, not in use now
const useIsUsingCustomRuleSet = () => {
  const {state, dispatch} = useContext(Context); 

  const setIsUsingCustomRuleSet = (isUsingCustomRuleSet) => {
    dispatch({data: {isUsingCustomRuleSet}})
  }

  return [selectIsUsingCustomRuleSet(state), setIsUsingCustomRuleSet]
}

const useBattleState = () => {
  
  const {state} = useContext(Context); 

  return state.battleState; 
}

const useRound = () => {
  const [playerPokemon] = usePlayerPokemon(); 
  const [rivalPokemon] = useRivalPokemon();  
  const [playerScore, setPlayerScore] = usePlayerScore(); 
  const [rivalScore, setRivalScore] = useRivalScore(); 
  const battleState = useBattleState()

  const {state} = useContext(Context); 

  useEffect(() => {

    if(playerPokemon === null || rivalPokemon === null || battleState !== "Ready to battle!"){
      return; 
    }

    if(selectRoundWinner(state) === "player"){
       //timeouts to line up with the animation
        setTimeout(setPlayerScore, 3000, (playerScore + 1)); 
    }if(selectRoundWinner(state) === "rival"){
        setTimeout(setRivalScore, 3000, (rivalScore + 1)); 
    }else {
      return; 
    }

  },     
  [playerPokemon, rivalPokemon, battleState])
  
}

const usePlayerScore = () => {
    const { state, dispatch } = useContext(Context)
    const setScore = (playerScore) => dispatch({ data: { playerScore, battleState:"Choosing pokemon..."}})
    return [
      selectPlayerScore(state),
      setScore
    ]
  }

  const useInitialState = () => {
    const { state, dispatch } = useContext(Context)

    return () => dispatch({data: initialState})
  }

  const useRivalScore = () => {
    const { state, dispatch } = useContext(Context)
    const setScore = (rivalScore) => dispatch({ data: { rivalScore, battleState:"Choosing pokemon..."}})
    return [
      selectRivalScore(state),
      setScore
    ]
  }

  //For potential further development, not in use now
  const useCustomRuleSet = () => {
    const {state, dispacth} = useContext(Context)
    const setCustomRuleset = () => dispacth({data: {customRuleSet}})
    return [
      selectCustomRuleSet(state), 
      setCustomRuleset
    ]
  }

  const useDefaultRuleSet = () => {
    const {state, dispacth} = useContext(Context)
    const setDefaultRuleset = () => dispacth({data: {defaultRuleSet}})
    return [
      selectDefaultRuleSet(state), 
      setDefaultRuleset
    ]
  }

  export {
    usePlayerScore, 
    useRivalScore,
    usePlayerPokemon, 
    useRivalPokemon, 
    useRound, 
    useIsChoosingPokemon, 
    useCustomRuleSet, 
    useDefaultRuleSet, 
    useIsUsingCustomRuleSet, 
    useBattleState, 
    useInitialState
  }