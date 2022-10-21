import Context from "../globalState/context"; 
import { useContext, useEffect } from "react";

const usePlayerPokemon = () => {
    const { state, dispatch } = useContext(Context);

    const selectPlayerPokemon = (playerPokemonId) => {
        const { state, dispatch } = useContext(Context);

        useEffect(() => {
            
        })
    }
}
//dispatch sender inn et objekt som heter data, inni den funksjonen skal jeg returnere et objekt med datakey
//som skal inneholde playerPokemonID - importer selector selectplayerpokemon- hooken skal returnere den anynyme 
//fuksjonen som setter player pokemon og verdien av selectoren 