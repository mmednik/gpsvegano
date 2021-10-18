import {
  Button,
  Card,
  Elevation,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./components/Header";
import Store from "./components/Store";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="stores">
          <Store />
        </div>
      </main>
    </div>
  );
}

export default App;
