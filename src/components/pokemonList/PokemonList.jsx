import "./PokemonList.css";

const PokemonList = ({ name, url, index }) => {
  const imgIndex = url.split("/")[url.split("/").length - 2];
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imgIndex}.png`;
  console.log(index);
  return (
    <div className="card">
      <h3>{name}</h3>
      <img src={imgUrl} alt="" />
    </div>
  );
};

export default PokemonList;
