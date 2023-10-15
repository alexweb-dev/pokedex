import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar" 

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      id : 1
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      id : 4
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      id : 7
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      id : 25
    },
    {
      name: "mew",
      id : 151
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(1);

  /*const previousClick = () => {
    if (pokemonIndex > 0) {
      setPokemonIndex(pokemonIndex - 1);

    }
  };

  const nextClick = () => {
    if (pokemonIndex < pokemonList.length - 1) {
      setPokemonIndex(pokemonIndex + 1);
    }
  }

  let previousButton = null;
  let nextButton = null;
  
  if (pokemonIndex > 0) {
    previousButton = <button onClick={previousClick}>Précédent</button>;
  }
  
  if (pokemonIndex < pokemonList.length - 1) {
    nextButton = <button onClick={nextClick}>Suivant</button>;
  }*/
  
  const pokemon = pokemonList.filter(p => p.id === pokemonIndex)[0]
  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={pokemon}/>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList ={pokemonList}/>
      <p>#{pokemonIndex}</p>
    </div>
  );
}

export default App;
