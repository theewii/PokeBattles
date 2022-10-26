import "./Pokemon.css"; 


export function Pokemon({pokemonData, cssClassName}: {pokemonData: any; cssClassName:string}){
    
    if(pokemonData === null){
        return null; 
    }
    return(
        <>
        <img className={cssClassName}src={pokemonData.imageUrl}></img>
        </>
    )
}