import React from "react";
import "./PokemonList.css";

const PokemonList = ({ name, url }) => {
  const imgIndex = url.split("/")[url.split("/").length - 2];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgIndex}.png`;
  return (
    <div className="card">
      <img src={imgUrl} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonList;
