import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';
import { Pokemon } from "./Pokemon";
import { ScoreBoard } from "./ScoreBoard";
import { useState } from "react";
import types from "../data/types.json"; 
import { Button } from "react-bootstrap";

const USERS ={
    PLAYER: "Player", 
    RIVAL: "Rival"
}

type PokemonType = {
    id: number; 
    type: string;
    weakAgainst: Array<string>; 
    strongAgainst: Array<string>; 
    icon: string; 
}

export function BattleField(){

    var dimensions = useWindowDimensions(); 

    if(dimensions.width > 414){
        return(
            <div className="battleFieldContainer">
                <div className="battleGrid">
                    <div className="topLeft">TopLeft
                        </div>   
                    <div className="rivalScore">
                        <ScoreBoard/>
                    </div>
                    <div className="topRight">
                        <Pokemon user={USERS.RIVAL}/>
                    </div>
                    <div className="midLeft1">midLeft1</div>
                    <div className="mid1">mid1</div>
                    <div className="midRight1">midRight1</div>
                    <div className="midLeft2">
                        <Pokemon user={USERS.PLAYER}/>
                    </div>
                    <div className="mid2">mid2</div>
                    <div className="midRight2">midRight2</div>
                    <div className="bottomLeft">
                 
                    </div>
                    <div className="playerScore">
                        <ScoreBoard/>
                    </div>
                    <div className="bottomRight">BottomRight</div>
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
                        <Pokemon user={USERS.RIVAL}/>
                    </div>
                    <div className="playerPokemon">
                        <Pokemon user={USERS.PLAYER}/>
                    </div>
                    <div className="playerScore" >
                        <ScoreBoard/>
                    </div>
    
                </div>
        </div>       
            )
    }
 
}