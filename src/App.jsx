import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyTitle from "./components/MyTitle"
import PokemonCard from "./components/PokemonCard" // Utilisez PokemonCard ici

function App() {
  return (
    <div>
      <MyTitle />
      <PokemonCard />
    </div>
  );
}

export default App;