import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';
import { ScoreBoard } from "./ScoreBoard";
import { useEffect, useState } from "react";
import pokeTypes from "../data/pokeTypes.json"; 
import { Button } from "react-bootstrap";
import GameArea from "./GameArea";
import PokemonData from "../data/pokemon.json";
import { usePlayerPokemon, useRivalPokemon, useRound, usePlayerScore, useRivalScore, useIsChoosingPokemon } from "../hooks/hooks";
import { Pokemon } from "./Pokemon";
export function BattleField(){

    useRound(); 

    const [ playerScore ] = usePlayerScore();

    const [rivalScore] = useRivalScore(); 

    const [playerPokemon] = usePlayerPokemon(); 

    const [venusaur, blastoise, charizard ] = PokemonData; 

    const [rivalPokemon, setRivalPokemon]  = useRivalPokemon(); 

    const [isChoosingPokemon, setIsChoosingPokemon] = useIsChoosingPokemon(); 

      //hver gang playerpokemon endrer seg skal jeg kjøre denne
      //her kan jeg potensielt legge på en delay for å kjøre en animasjon :) 
    useEffect(() => {
        if(playerPokemon === null){
            return; 
        }
        if(!isChoosingPokemon && rivalPokemon === null){
            setIsChoosingPokemon(true); 
            return; 
        }
        const randomPokemon = [venusaur, blastoise, charizard].at(Math.floor(Math.random() * 3)); 
        console.log(randomPokemon)
        setRivalPokemon(randomPokemon?.id); 
        setIsChoosingPokemon(false)
    }, [playerPokemon, isChoosingPokemon]); 

    var dimensions = useWindowDimensions(); 

    if(dimensions.width > 414){
        return(
            <div className="battleFieldContainer">
                <div className="battleGrid">
                    <div className="topLeft">
                        </div>   
                    <div className="rivalScore">
                        <ScoreBoard 
                        score={rivalScore}
                        user={"Rival"}/>
                    </div>
                    <div className="topRight">
                        <Pokemon pokemonData={rivalPokemon}/>
                    </div>
                    <div className="midLeft1"></div>
                    <div className="mid1">
                        <GameArea/>
                    </div>
                    <div className="midRight1"></div>
                    <div className="midLeft2">
                        <Pokemon pokemonData={playerPokemon}/>
                    </div>
                    <div className="mid2"></div>
                    <div className="midRight2"></div>
                    <div className="bottomLeft">
                 
                    </div>
                    <div className="playerScore">
                        <ScoreBoard 
                        user={"Player"}
                        score={playerScore}/>
                    </div>
                    <div className="bottomRight"></div>
                </div>
            </div>       
        )     
    } else {
        return (
            <div className="battleFieldContainer">
                <div className="battleGridSmall">
                    <div className="rivalScore">
                        <ScoreBoard/>
                    </div>
                    <div className="rivalPokemon">
                        <Pokemon pokemonData={rivalPokemon}/>
                    </div>
                    <div className="gameArea">
                        <GameArea/>
                    </div>
                    <div className="playerPokemon">
                        <Pokemon pokemonData={playerPokemon}/>
                    </div>
                    <div className="playerScore" >
                        <ScoreBoard/>
                    </div>
    
                </div>
        </div>       
            )
    }
 
}