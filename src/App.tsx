import {Routes, Route} from "react-router-dom"; 
import "./App.css";
import { Container } from "react-bootstrap";
import { useReducer, useMemo } from 'react'
import "./fonts/Pokemon.ttf"; 
//import { reducer, initialState } from './globalState/reducer';  

import { Pokemon } from "./components/Pokemon";
import { BattleField } from "./components/BattleField";

function App() {
/*  const [state, dispatch] = useReducer(reducer, initialState)
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
*/
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

export default App
