import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import pokemon from "./data/pokemon.json"; 
import { Col, Container, Row } from "react-bootstrap";

import "./fonts/Pokemon.ttf"; 
import { Pokemon } from "./components/Pokemon";
import { BattleField } from "./components/BattleField";

function App() {

  return (
    <>
    <Container className="pt-5 pb-5">
    <BattleField/>
    <Pokemon></Pokemon>
    </Container>
 
</>
  )
}

export default App
