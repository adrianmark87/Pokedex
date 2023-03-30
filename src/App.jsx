import "./App.css";
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
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

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex === 0 ? 0 : pokemonIndex - 1);
  };

  const handleNext = () => {
    setPokemonIndex(
      pokemonIndex === pokemonList.length - 1
        ? pokemonList.length - 1
        : pokemonIndex + 1
    );
  };

  return (
    <div>
      <NavBar
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        pokemonIndex={pokemonIndex}
        pokemonList={pokemonList}
      />

      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
  );
}

export default App;
