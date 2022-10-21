
import "./BattleField.css"; 
export function BattleField(){
    return (
        <div className="battleFieldContainer">
            <div className="item battleGrid">
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
}