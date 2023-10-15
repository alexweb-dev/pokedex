
  function PokemonCard({pokemon}) {
    return (
      <figure>
        {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<img src="Mew.png"/> /*<p>???</p>*/)}
  
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
  }
  
  export default PokemonCard;