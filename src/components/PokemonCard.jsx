

  function PokemonCard(props) {
    console.log(props);

    return (
      <figure>
        {props.pokemon.imgSrc ? (
          <img src={props.pokemon.imgSrc} alt={props.pokemon.name} />
        ) : (
          <p>???</p>
        )}
  
        <figcaption>{props.pokemon.name}
        <br />{props.pokemon2.name}</figcaption>
      </figure>
    );
  }
  
  export default PokemonCard;