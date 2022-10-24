import "./Pokemon.scss"; 
export function Pokemon({pokemonData}){
    
    if(pokemonData === null){
        return null; 
    }
    return(
        <>
        <img  style={{objectFit:"cover", width: "25em"}} src={pokemonData.imageUrl}></img>
        </>
    )
}