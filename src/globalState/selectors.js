import Pokemon  from "../data/pokemon.json";
import pokeTypes  from "../data/pokeTypes.json";

const selectPlayerScore = (state) => state.playerScore; 

const selectRivalScore = (state) => state.rivalScore; 

const selectPlayerPokemon = (state) => Pokemon.find(({id}) => id === state.playerPokemon) || null;  

const selectRivalPokemon = (state) => Pokemon.find(({id}) => id === state.rivalPokemon) || null; 

const selectIsChoosingPokemon = (state) => state.isChoosingPokemon; 

const selectIsUsingCustomRuleSet = (state) => state.isUsingCustomRuleSet; 

const selectRoundWinner = (state)  => {
    const playerPokemonType = selectPlayerPokemonType(state); 
    const rivalPokemonType = selectRivalPokemonType(state); 

    if(playerPokemonType.strongAgainst.includes(rivalPokemonType.type)){
        return "player"
    }
    if(rivalPokemonType.strongAgainst.includes(playerPokemonType.type)){
        return "rival"
    }
    return "draw"
}

const selectCustomRuleSet = (state) => {
 
    if(state.customRuleSet === state.defaultRuleSet){
        return state.defaultRuleSet; 
    }
    //TODO: HER SKAL DU RETURNERE DET NYE EVENTUELT - videreutvikling
    return state.defaultRuleSet;
    
}

const selectDefaultRuleSet = (state) => {
    const [venusaur, blastoise, charizard ] = Pokemon; 
    const defaultRules = [venusaur, blastoise, charizard]; 

    state.defaultRuleSet = defaultRules; 
    return defaultRules; 
}

const selectPlayerPokemonType = (state) => {
    const playerPokemon = selectPlayerPokemon(state); 

    if(playerPokemon === null){
        return null; 
    }
    return pokeTypes.find(({type}) => type === playerPokemon.type);
}

const selectRivalPokemonType = (state) => {
    const rivalPokemon = selectRivalPokemon(state); 

    if(rivalPokemon === null){
        return null; 
    }
    return pokeTypes.find(({type}) => type === rivalPokemon.type);
}

const selectPokeType = (state) => pokeTypes.find(({type}) => type === state.type); 

export {
    selectPlayerScore,
    selectIsChoosingPokemon,
    selectIsUsingCustomRuleSet, 
    selectRivalScore,  
    selectPlayerPokemon, 
    selectRivalPokemon, 
    selectPokeType, 
    selectRoundWinner, 
    selectCustomRuleSet, 
    selectDefaultRuleSet, 
}