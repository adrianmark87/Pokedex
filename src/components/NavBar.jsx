import { useEffect } from "react";

function NavBar({ handlePrevious, handleNext, pokemonIndex, pokemonList }) {
  const currentPokemon = pokemonList[pokemonIndex];

  useEffect(() => {
    window.alert("hello pokemon trainer :)");
  }, []);

  pokemonList[pokemonIndex].name === "pikachu" &&
    window.alert("pika pikachu !!!");

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
