import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
    </BrowserRouter>
  );
}

export default App;
