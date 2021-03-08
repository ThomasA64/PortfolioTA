import { BrowserRouter, Route, Switch } from "react-router-dom";

//Components:
import Home from "./components/Home";
import Menu from "./components/Menu";

//Styles:
import "./styles/menu.css";
import "./styles/styles.css";

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
