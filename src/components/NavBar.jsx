import React from 'react';
import App from '../App';

function NavBar({pokemonIndex, setPokemonIndex, pokemonList}) {
    console.log(pokemonIndex, pokemonList)
    // Quest 7
    // const previousClick = () => {
    //   if (pokemonIndex > 0) {
    //     setPokemonIndex(pokemonIndex - 1);
    //   }
    // };
  
    // const nextClick = () => {
    //   if (pokemonIndex < pokemonList.length - 1) {
    //     setPokemonIndex(pokemonIndex + 1);
    //   }
    // }
  
    // let previousButton = null;
    // let nextButton = null;
    
    // if (pokemonIndex > 0) {
    //   // previousButton = <button onClick={previousClick}>Précédent</button>;
    // }
    
    // if (pokemonIndex < pokemonList.length - 1) {
    //   // nextButton = <button onClick={nextClick}>Suivant</button>;
    // }
    const goToPokemon= (idPokemon) => {setPokemonIndex(idPokemon)}
    return(
        <>
        {/* Quest 7
        {previousButton} 
        {nextButton} */}
        
        {/* Quest 8 */}
        {pokemonList.map((pokemon) => <button key={"Go to Pokemon #" + pokemon.id + " : " + pokemon.name + " !"}onClick={() => goToPokemon(pokemon.id)}>{pokemon.name}</button>)}
        </>
    )
    }
    /**/
    export default NavBar;


    