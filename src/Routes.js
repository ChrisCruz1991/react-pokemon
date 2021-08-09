import { Switch, Route } from "react-router-dom";
import App from "./components/App";
import Header from "./components/Header";
import SinglePokemonCard from "./components/SinglePokemonCard";

const Routes = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/:id" component={SinglePokemonCard} />
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  );
};

export default Routes;
