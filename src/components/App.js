import "./App.css";

import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import PokemonCard from "./PokemonCard";

const GET_POKEMON_INFO = gql`
  {
    pokemons {
      id
      name {
        english
      }
      species
      thumbnail
      sprite
      type
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <section className="container">
      {data.pokemons.map((pokemon, idx) => (
        <PokemonCard key={idx} pokemon={pokemon} />
      ))}
    </section>
  );
}

export default App;
