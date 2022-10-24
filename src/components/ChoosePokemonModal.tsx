import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { usePlayerPokemon, useRivalPokemon} from '../hooks/hooks';

import Pokemon from "../data/pokemon.json";

export default function ChoosePokemonModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [playerPokemon, setPlayerPokemon] = usePlayerPokemon(); 

  const [rivalPokemon, setRivalPokemon] = useRivalPokemon(); 

  const [venusaur, blastoise, charizard ] = Pokemon; 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      <h3 className="mt-1">Play Game!</h3>
    <img style={{objectFit:"cover", width: "15em"}} src="../../public/Images/Pokeball.png"></img>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Choose pokemon!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <button onClick={() => {setPlayerPokemon(venusaur.id); handleClose()}} style={{display: "flex"}}>
            <span>{venusaur.name}</span>
                <img src={venusaur.imageUrl}/>
            </button>
            <button onClick={() => {setPlayerPokemon(blastoise.id); handleClose()}}  style={{display: "flex"}}>
            <span>{blastoise.name}</span>
                <img src={blastoise.imageUrl}/>
            </button>
            <button onClick={() => {setPlayerPokemon(charizard.id); handleClose()}}  style={{display: "flex"}}>
                <span>{charizard.name}</span>
                <img src={charizard.imageUrl}/>
            </button>

        </Modal.Body>
      </Modal>
    </>
  );
}