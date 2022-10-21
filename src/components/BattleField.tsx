import "./BattleField.css"; 
import { useWindowDimensions } from '../utilities/useWindowDimensions';

export function BattleField(){

    var dimensions = useWindowDimensions(); 

    if(dimensions.width > 414){
        return(
            <div className="battleFieldContainer">
                <div className="battleGrid">
                    <div className="item topLeft">TopLeft</div>   
                    <div className="item rivalScore">RivalScore</div>
                    <div className="item topRight">TopRight</div>
                    <div className="item midLeft1">midLeft1</div>
                    <div className="item mid1">mid1</div>
                    <div className="item midRight1">midRight1</div>
                    <div className="item midLeft2">midLeft2</div>
                    <div className="item mid2">mid2</div>
                    <div className="item midRight2">midRight2</div>
                    <div className="item bottomLeft">BottomLeft</div>
                    <div className="item playerScore">playerScore</div>
                    <div className="item bottomRight">BottomRight</div>
                </div>
            </div>       
        )     
    } else {
        return (
            <div className="battleFieldContainer">
            <div className="battleGridSmall">
            <div className="itemSmall rivalScore">RivalScore</div>
            <div className="itemSmall rivalPokemon">RivalPokemon</div>
            <div className="itemSmall playerPokemon">PlayerPokemon</div>
            <div className="itemSmall playerScore">playerScore</div>
  
            </div>
        </div>       
            )
    }
 
}