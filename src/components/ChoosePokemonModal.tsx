import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePlayerPokemon, useRivalPokemon} from '../hooks/hooks';
import "./ChoosePokemon.css"; 

import Pokemon from "../data/pokemon.json";

export default function ChoosePokemonModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playerPokemon, setPlayerPokemon] = usePlayerPokemon(); 

  const [rivalPokemon, setRivalPokemon] = useRivalPokemon(); 

  const [venusaur, blastoise, charizard ] = Pokemon; 

  function capitalizeFirstLetter(pokeType : string){
    return pokeType.charAt(0).toUpperCase() + pokeType.slice(1); 
  }


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <h3 className="mt-1">Play Game!</h3>
    <img style={{objectFit:"cover", width: "15em"}} src="./Images/Pokeball.png"></img>
      </Button>

      <Modal size="xl"show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose your Pokemon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                    <button onClick={() => {setRivalPokemon(null); setPlayerPokemon(venusaur.id); handleClose()}}>
                        <img className="image" src={venusaur.imageUrl}/>
                    </button>
                </div>
                <div className="pokemon2">
                    <button onClick={() => {setRivalPokemon(null); setPlayerPokemon(blastoise.id); handleClose()}}>
                        <img className="image" src={blastoise.imageUrl}/>
                </button>
                </div>
                <div className="pokemon3">
                    <button onClick={() => {setRivalPokemon(null); setPlayerPokemon(charizard.id); handleClose()}}>
                        <img  className="image"  src={charizard.imageUrl}/>
                    </button>
                </div>
        
        
 
            </div>


        </Modal.Body>
      </Modal>
    </>
  );
}