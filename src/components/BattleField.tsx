import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';
import { ScoreBoard } from "./ScoreBoard";
import { useEffect, useState } from "react";
import pokeTypes from "../data/pokeTypes.json"; 
import { Button } from "react-bootstrap";
import PokemonData from "../data/pokemon.json";
// @ts-ignore
import { usePlayerPokemon, useRivalPokemon, useRound, useDefaultRuleSet, usePlayerScore, useRivalScore, useIsChoosingPokemon, useCustomRuleSet } from "../hooks/hooks";
import { Pokemon } from "./Pokemon";
import ChoosePokemonModal from "./ChoosePokemonModal";

export function BattleField(){


    useRound(); 
    const [ playerScore ] = usePlayerScore();

    const [rivalScore] = useRivalScore(); 

    const [playerPokemon] = usePlayerPokemon();
    
    //se om jeg får gjort noe med denne
    const [defaultRuleSet] = useDefaultRuleSet(); 

    const [rivalPokemon]  = useRivalPokemon(); 

    const [isChoosingPokemon, setIsChoosingPokemon] = useIsChoosingPokemon(); 

    useEffect(() => {
        setIsChoosingPokemon(true);
        setTimeout(setIsChoosingPokemon, 3000, false); 

    }, [playerPokemon, rivalPokemon]) 

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
                       {isChoosingPokemon &&
                          <div className="pulse-base"></div>
                       }
                       {!isChoosingPokemon &&
                       <Pokemon pokemonData={rivalPokemon} cssClassName={"pokemonBigScreen"}/>
                       }
                        
                    </div>
                    <div className="midLeft1"></div>
                    <div className="mid1">
                        <ChoosePokemonModal cssClassName={"playButtonBigScreen"}/>
                    </div>
                    <div className="midRight1"></div>
                    <div className="midLeft2">
                    {isChoosingPokemon &&
                        <div>JEG VELGER POKEMON</div>
                       }
                        <Pokemon pokemonData={playerPokemon} cssClassName={"pokemonBigScreen"}/>
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
                        <ScoreBoard
                         score={rivalScore}
                         user={"Rival"}/>
                    </div>
                    <div className="rivalPokemon">
                        <Pokemon pokemonData={rivalPokemon} cssClassName={"pokemonSmallScreen"}/>
                    </div>
                    <div className="gameArea">
                        <ChoosePokemonModal cssClassName={"playButtonSmallScreen"}/>
                    </div>
                    <div className="playerPokemon">
                        <Pokemon pokemonData={playerPokemon} cssClassName={"pokemonSmallScreen"}/>
                    </div>
                    <div className="playerScore" >
                        <ScoreBoard
                         user={"Player"}
                         score={playerScore}/>
                    </div>
    
                </div>
        </div>       
            )
    }
 
}