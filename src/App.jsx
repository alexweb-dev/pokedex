import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard" // Utilisez PokemonCard ici

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function App() {
  return (
    <div>
      <MyTitle />
      <PokemonCard      
      pokemon = {pokemonList[0]}
      pokemon2 = {pokemonList[1]}
      />
    </div>
  );
}

export default App;