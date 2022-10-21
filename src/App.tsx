import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import pokemon from "./data/pokemon.json"; 
import { Col, Row } from "react-bootstrap";

import "./fonts/Pokemon.ttf"; 
import { Pokemon } from "./components/Pokemon";

function App() {

  return (
    <>
    <h1>hi from app!</h1>
    <Pokemon></Pokemon>
</>
  )
}

export default App
