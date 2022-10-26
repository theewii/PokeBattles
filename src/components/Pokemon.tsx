import "./Pokemon.css"; 


export function Pokemon({pokemonData, cssClassName, animationClass}: {pokemonData: any; cssClassName:string; animationClass: string}){
    
    if(pokemonData === null){
        return null; 
    }
    return(
        <>
        <div className={animationClass}>
        <img className={cssClassName}src={pokemonData.imageUrl}></img>
        </div>
        </>
    )
}