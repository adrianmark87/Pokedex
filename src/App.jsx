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

  const [selectedPokemon, setselectedPokemon] = useState(pokemonList[0]);

  const handleClickButton = (name) => {
    let selected;
    for (let i = 0; i < pokemonList.length; i++) {
      if (pokemonList[i].name === name) {
        selected = pokemonList[i];
      }
    }
    setselectedPokemon(selected);
  };

  return (
    <div>
      <NavBar pokemonList={pokemonList} handleClickButton={handleClickButton} />

      <PokemonCard pokemon={selectedPokemon} />
    </div>
  );
}

export default App;
