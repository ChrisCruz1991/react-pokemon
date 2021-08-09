import PokemonLogo from "../assets/imgs/pokemonlogo.png";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={PokemonLogo} alt="Pokemon logo" />
    </header>
  );
};

export default Header;
