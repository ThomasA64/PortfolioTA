import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components:
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cards from "./components/Cards";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";

//Styles:
import "./styles/menu.css";
import "./styles/styles.css";
import "./styles/animations.css";
import "./styles/cards.css";
import "./styles/nav.css";
import "./styles/projects.css";
import "./styles/bio.css";

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
              <Cards />
            </>
          )}
        />
        <Route
          path="/about"
          render={() => (
            <>
              {" "}
              <Bio />{" "}
            </>
          )}
        />
        <Route
          path="/projects"
          render={() => (
            <>
              <Projects></Projects>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
