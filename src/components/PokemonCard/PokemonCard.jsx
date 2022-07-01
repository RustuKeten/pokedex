// import { useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import PokemonList from "../pokemonList/PokemonList";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=20")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, [pokemonName]);

  const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  console.log(pokemonName);
  return (
    <div className="page">
      <div>
        <div className="header">
          {" "}
          <label htmlFor="header">POKEMON</label>
        </div>
        <input type="text" id="header" onChange={handleChange} />
      </div>
      <div className="container-card">
        {!pokemonName
          ? pokemon.map((poke) => {
              return <PokemonList {...poke} />;
            })
          : pokemon.map((poke) => {
              return (
                poke.name.includes(pokemonName) && <PokemonList {...poke} />
              );
            })}
      </div>
    </div>
  );
};

export default PokemonCard;
