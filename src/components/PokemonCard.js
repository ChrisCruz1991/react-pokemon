import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";

const PokemonCard = ({ pokemon }) => {
  const displayTypes = (types) => {
    return types.join("/");
  };
  return (
    <CardInfo>
      <header>
        <h3>
          {pokemon.id} - {pokemon.name.english}
        </h3>
      </header>
      <img className="pokemon-image" src={pokemon.thumbnail} alt="pokemon" />
      <br />
      <strong>{pokemon.species}</strong>
      <p>{displayTypes(pokemon.type)}</p>
      <Link to={`/${pokemon.id}`}>
        <button className="card-button">View</button>
      </Link>
    </CardInfo>
  );
};

export default PokemonCard;
