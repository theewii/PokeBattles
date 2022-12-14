import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';
import { ScoreBoard } from "./ScoreBoard";
import { useEffect, useState } from "react";
// @ts-ignore
import { usePlayerPokemon, useRivalPokemon, useRound, useInitialState, useBattleState, usePlayerScore, useRivalScore, useIsChoosingPokemon, useCustomRuleSet } from "../hooks/hooks";
import { Pokemon } from "./Pokemon";
import ChoosePokemonModal from "./ChoosePokemonModal";
import { Button } from "react-bootstrap";


function getWinnerImageUrl(winner: string){
    if(winner === "rival"){
        return "./Images/RivalWins.png"
    }
    return "./Images/PlayerWins.png"
}

export function BattleField(){

    useRound(); 

    const [ playerScore ] = usePlayerScore();

    const [rivalScore] = useRivalScore(); 

    const [playerPokemon] = usePlayerPokemon();

    const [rivalPokemon]  = useRivalPokemon(); 

    const [hasWinner, setHasWinner] = useState(false); 

    const [isWinner, setIsWinner] = useState(""); 

    const resetState = useInitialState(); 

    const battleState = useBattleState(); 

    const [isChoosingPokemon, setIsChoosingPokemon] = useIsChoosingPokemon(); 

    useEffect(() => {
        if(playerPokemon === null && rivalPokemon === null){
            return; 
        }

        if(battleState !== "Ready to battle!"){
            return;
        }
        setIsChoosingPokemon(true);
        setTimeout(setIsChoosingPokemon, 3000, false); 

    }, [playerPokemon, rivalPokemon, battleState]) 

    useEffect(() => {
        if(rivalScore === 2){
            setIsWinner("rival"); 
            setHasWinner(true)

        }if(playerScore ===2){
            setIsWinner("player"); 
            setHasWinner(true)
        }
    }, [playerScore, rivalScore])

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
                        user={"Rival (Computer)"}/>
                    </div>
                    <div className="topRight">
                       {isChoosingPokemon ?
                          <div className="pulse-base">
                            <img className="pokeballCenter" src="./Images/Pokeball.png"></img>
                          </div>
                       :
                        <Pokemon 
                        pokemonData={rivalPokemon} 
                        cssClassName={"pokemonBigScreen"}
                        animationClass={"animationMoveDown"}
                        />
                        }   
                    </div>
                    <div className="midLeft1"></div>
                    <div className="mid1">
                        {hasWinner ? 
                        <div className="gameOverContainer">
                            <img style={{objectFit:"cover", maxWidth:"20em"}}src={getWinnerImageUrl(isWinner)}></img>
                            <br></br>
                            <Button variant="secondary" onClick={() => {resetState(); setHasWinner(false)}}>Play again?</Button>
                        </div>
                        :
                        <ChoosePokemonModal disableButton={isChoosingPokemon} cssClassName={"playButtonBigScreen"}/>
                        }
                    </div>
                    <div className="midRight1"></div>
                    <div className="midLeft2">
                    {isChoosingPokemon ?
                          <div className="pulse-base">
                          <img className="pokeballCenter" src="./Images/Pokeball.png"></img>
                        </div>
                    :
                    <Pokemon 
                    pokemonData={playerPokemon} 
                    cssClassName={"pokemonBigScreen"}
                    animationClass={"animationMoveUp"}
                    />
                    }
                       
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
                         user={"Rival (Computer)"}/>
                    </div>
                    <div className="rivalPokemon">
                    {isChoosingPokemon ?
                        <div className="pulse-base-small">
                        <img className="pokeballCenter-small" src="./Images/Pokeball.png"></img>
                        </div>
                    :
                        <Pokemon 
                        animationClass={"animationMoveVerticalDown"}
                        pokemonData={rivalPokemon} 
                        cssClassName={"pokemonSmallScreen"}/>
                    }
                    </div>
                    <div className="gameArea">
                    {hasWinner ? 
                        <div className="gameOverContainer">
                            <img style={{objectFit:"cover", maxWidth:"20em"}}src={getWinnerImageUrl(isWinner)}></img>
                            <br></br>
                            <Button variant="secondary" onClick={() => {resetState(); setHasWinner(false)}}>Play again?</Button>
                        </div>
                        :
                        <ChoosePokemonModal 
                        disableButton={isChoosingPokemon}
                        cssClassName={"playButtonSmallScreen"}/>
                    }
                    </div>
                    <div className="playerPokemon">
                        {isChoosingPokemon ?
                            <div className="pulse-base-small">
                            <img className="pokeballCenter-small" src="./Images/Pokeball.png"></img>
                            </div>
                        :
                            <Pokemon 
                            animationClass={"animationMoveVerticalUp"}
                            pokemonData={playerPokemon} 
                            cssClassName={"pokemonSmallScreen"}/>
                        }
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