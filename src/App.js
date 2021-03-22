import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components:
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";

//Styles:
import "./styles/menu.css";
import "./styles/styles.css";
import "./styles/animations.css";
import "./styles/cards.css";
import "./styles/nav.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <NavBar />
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              {" "}
              <Home />
              <Cards />{" "}
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
