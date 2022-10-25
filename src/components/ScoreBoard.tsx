import { Container } from "react-bootstrap";
import "./ScoreBoard.css";

export function ScoreBoard({score, user} : {score: number, user: string}){

    return(
        <div className="paper">
            <Container className="p-2">
                <h2>{user}</h2>
                <h3>{score}</h3>
            </Container>
        </div>
    )
}
