import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";

const PokemonCard = () => {
  const [pokemon, setPokemon] = useState([]);
  const [PokemonName, setPokemonName] = useState("");
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then((response) => setPokemon(response.data.results))
      .catch((error) => console.log({ error }));
  }, [PokemonName]);

  const filterCard = (e) => {
    setPokemonName(e.target.value);
  };
  return (
    <div className="container-son">
      <div>
        <div className="header">
          {" "}
          <label htmlFor="header">POKEMON</label>
        </div>
        <input type="text" id="header" onChange={filterCard} />
      </div>
      <div className="container-card">
        {!PokemonName
          ? pokemon.map((poki) => {
              return <PokemonList {...poki} />;
            })
          : pokemon.map((poki) => {
              return (
                poki.name.includes(PokemonName) && <PokemonList {...poki} />
              );
            })}
      </div>
    </div>
  );
};

export default PokemonCard;
