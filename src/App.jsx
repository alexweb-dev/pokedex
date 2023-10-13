import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard" // Utilisez PokemonCard ici
import NavBar from "./components/NavBar" // Utilisez PokemonCard ici

const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

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
  
  
  return (
    <div>
      <MyTitle />
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList ={pokemonList}/>
      <p>#{pokemonIndex + 1}</p>
    </div>
  );
}

export default App;
