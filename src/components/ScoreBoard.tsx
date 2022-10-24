import { Container } from "react-bootstrap";
import { useScore } from "../hooks/hooks";
import "./ScoreBoard.css";

export function ScoreBoard({score}){
    
    //burde ha player score/rival score 
    
    return(
        <div className="paper">
            <Container className="p-2">
       
                <h2>user?</h2>
                <h3>{score}</h3>
 

            </Container>
        </div>
    )
}
