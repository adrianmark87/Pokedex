function NavBar({ handleClickButton, pokemonList }) {
  return (
    <div>
      {pokemonList.map((pokemon) => (
        <button
          key={pokemon.name}
          onClick={() => handleClickButton(pokemon.name)}
        >
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}
export default NavBar;

