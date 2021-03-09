import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components:
import Home from "./components/Home";
import Menu from "./components/Menu";
import Nav from "./components/Nav";

//Styles:
import "./styles/menu.css";
import "./styles/styles.css";
import "./styles/animations.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
