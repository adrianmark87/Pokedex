
function PokemonCard(props) {
    console.log(props)
  const  pokemon=props.pokemon;
  
    return (
        <figure>
            {pokemon.imgSrc === "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            ? <img src={pokemon.imgSrc} alt="Pokemon" /> : <p>???</p> }
          <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}
export default PokemonCard; 


