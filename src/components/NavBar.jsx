function NavBar({ handlePrevious, handleNext, pokemonIndex, pokemonList }) {
  return (
    <div>
      {pokemonIndex === 0 ? (
        <div></div>
      ) : (
        <div>
          <button onClick={handlePrevious}>Previous</button>
        </div>
      )}
      {pokemonIndex === pokemonList.length - 1 ? (
        <div></div>
      ) : (
        <div>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
    </div>
  );
}
export default NavBar;
