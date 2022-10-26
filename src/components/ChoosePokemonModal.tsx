import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./Pokemon.css"; 
// @ts-ignore
import { usePlayerPokemon, useRivalPokemon, useDefaultRuleSet, useBattleState} from '../hooks/hooks';
import "./ChoosePokemon.css"; 

import Pokemon from "../data/pokemon.json";

export default function ChoosePokemonModal({cssClassName, disableButton}:{cssClassName: string; disableButton:boolean}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playerPokemon, setPlayerPokemon] = usePlayerPokemon(); 

  const [rivalPokemon, setRivalPokemon] = useRivalPokemon(); 

  const [defaultRuleSet] = useDefaultRuleSet(); 

  const battleState = useBattleState(); 

  const [venusaur, blastoise, charizard ] = Pokemon; 

  function capitalizeFirstLetter(pokeType : string){
    return pokeType.charAt(0).toUpperCase() + pokeType.slice(1); 
  }

  useEffect(() => {
    if(playerPokemon === null || battleState !== "Rival choosing pokemon..."){
        return; 
    }

    const randomPokemon = defaultRuleSet[Math.floor(Math.random() * defaultRuleSet.length)]; 
    // @ts-ignore
    setRivalPokemon(randomPokemon?.id);
  }, [playerPokemon, battleState])

  return (
    <>
      <Button disabled={disableButton}variant="secondary" onClick={handleShow}>
      <h3 className="mt-1">Play Game!</h3>
        <img className={cssClassName} src="./Images/Pokeball.png"></img>
      </Button>

      <Modal size="xl"show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><img src="./Images/PokeBattles.png" style={{width:"300px"}}></img></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className='text-center' style={{fontWeight:"bold"}}>Rules</h4>
            <h4 className='text-center'>Best score out of 3</h4>
            <h4 className='text-center'>Grass beats water, water beats fire, fire beats grass!</h4>
            <br/>
            {/**TODO: Gjør en .map over lista, det her er for hardkoda */}
            <div className="gridContainer">
                <div className="type1">
                    <h2>{capitalizeFirstLetter(venusaur.type)}</h2>
                </div>
                <div className="type2">
                    <h2>{capitalizeFirstLetter(blastoise.type)}</h2>
                </div>
                <div className="type3">
                    <h2>{capitalizeFirstLetter(charizard.type)}</h2>
                </div>
                <div className="typeIcon1">
                    <img className="iconImage" src="./Images/GrassIcon.png"/>
                </div>
                <div className="typeIcon2">
                    <img className="iconImage" src="./Images/WaterIcon.png"/>
                </div>
                <div className="typeIcon3">
                    <img className="iconImage" src="./Images/FireIcon.png"/>
                </div>
                <div className="header1">
                    <h2>{venusaur.name}</h2>
                </div>
                <div className="header2">
                     <h2>{blastoise.name}</h2>
                </div>
                <div className="header3">
                    <h2>{charizard.name}</h2>
                </div>
                <div className="pokemon1">
                    <Button variant="outline-success" onClick={() => {setPlayerPokemon(venusaur.id); handleClose()}}>
                        <img className="image" src={venusaur.imageUrl}/>
                    </Button>
                </div>
                <div className="pokemon2">
                    <Button variant="outline-primary" onClick={() => {setPlayerPokemon(blastoise.id); handleClose()}}>
                        <img className="image" src={blastoise.imageUrl}/>
                </Button>
                </div>
                <div className="pokemon3">
                    <Button variant="outline-danger" onClick={() => {setPlayerPokemon(charizard.id); handleClose()}}>
                        <img  className="image"  src={charizard.imageUrl}/>
                    </Button>
                </div>
        
        
 
            </div>


        </Modal.Body>
      </Modal>
    </>
  );
}