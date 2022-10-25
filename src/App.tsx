import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import { Container } from "react-bootstrap";
// @ts-ignore
import composeWithGlobalState from './globalState/composeWithGlobalState';
import "./fonts/Pokemon.ttf"; 
import { BattleField } from "./components/BattleField";

function App() {

  return (
    <>
    <div className="overlay">
    <Container className="pt-5 pb-5">
      <BattleField/>
    </Container>
    </div>
</>
  )
}
//component composition
export default composeWithGlobalState(App); 
