import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';
import { Pokemon } from "./Pokemon";

export function BattleField(){

    var dimensions = useWindowDimensions(); 

    if(dimensions.width > 414){
        return(
            <div className="battleFieldContainer">
                <div className="battleGrid">
                    <div className="topLeft">TopLeft</div>   
                    <div className="rivalScore">RivalScore</div>
                    <div className="topRight">
                        <Pokemon/>
                    </div>
                    <div className="midLeft1">midLeft1</div>
                    <div className="mid1">mid1</div>
                    <div className="midRight1">midRight1</div>
                    <div className="midLeft2">
                        <Pokemon/>
                    </div>
                    <div className="mid2">mid2</div>
                    <div className="midRight2">midRight2</div>
                    <div className="bottomLeft">
                 
                    </div>
                    <div className="playerScore">playerScore</div>
                    <div className="bottomRight">BottomRight</div>
                </div>
            </div>       
        )     
    } else {
        return (
            <div className="battleFieldContainer">
            <div className="battleGridSmall">
            <div className="rivalScore">RivalScore</div>
            <div className="rivalPokemon">
            <Pokemon/>
            </div>
            <div className="playerPokemon">
            <Pokemon/>
            </div>
            <div className="playerScore" >playerScore</div>
  
            </div>
        </div>       
            )
    }
 
}