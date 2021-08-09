import { useParams } from "react-router";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import CardInfo from "./CardInfo";

import "./SinglePokemonCard.css";

const GET_POKEMON_INFO = gql`
  query pokemon($id: Int!) {
    pokemon(id: $id) {
      id
      name {
        english
      }
      species
      description
      thumbnail
      sprite
      type
      base {
        HP
        Attack
        Defense
        Speed
      }
    }
  }
`;

const SinglePokemonCard = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_POKEMON_INFO, {
    variables: { id: parseInt(id) },
  });

  const displayTypes = (types) => {
    return types.join("/");
  };

  if (error) return <div>Error</div>;
  if (loading) return <div>Loading...</div>;

  return (
    <div className="single-pokemon">
      <CardInfo>
        <header>
          <h3>
            {data.pokemon.id} - {data.pokemon.name.english}
          </h3>
        </header>
        <div className="image-container">
          <img
            className="pokemon-image"
            src={data.pokemon.thumbnail}
            alt="pokemon"
          />

          <img
            className="pokemon-sprite"
            src={data.pokemon.sprite}
            alt="sprite"
          />
        </div>
        <br />
        <strong>{data.pokemon.species}</strong>
        <p>{displayTypes(data.pokemon.type)}</p>
        <p className="description">{data.pokemon.description}</p>

        <h3>Base Stats</h3>
        <ul>
          <div className="col">
            <li>{data.pokemon.base.HP} HP</li>
            <li>{data.pokemon.base.Attack} Attack</li>
          </div>
          <div className="col">
            <li>{data.pokemon.base.Defense} Defense</li>
            <li>{data.pokemon.base.Speed} Speed</li>
          </div>
        </ul>
      </CardInfo>
    </div>
  );
};

export default SinglePokemonCard;
