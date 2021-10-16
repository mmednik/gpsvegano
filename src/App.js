import {
  Button,
  Card,
  Elevation,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./components/Header";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="stores">
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
          <Card className="store" interactive={true} elevation={Elevation.ONE}>
            <h5>
              <a href="#">Card heading</a>
            </h5>
            <p>Card content</p>
            <Button>Submit</Button>
          </Card>
        </div>
      </main>
    </div>
  );
}

export default App;
