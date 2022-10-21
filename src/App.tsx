import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import pokemon from "./data/pokemon.json"; 
import { Col, Row } from "react-bootstrap";

import "./fonts/Pokemon.ttf"; 

function App() {

  return (
    <>
    <h1>hi!</h1>
    <Row md={2} xs={1} lg={3} className="g-3">
    {pokemon.map(item => (
        <Col key={item.id}>
           <img src={item.imageUrl}/>
        </Col>
    ))}
</Row>
</>
  )
}

export default App
