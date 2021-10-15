import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Card,
  Elevation,
} from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar fixedToTop>
          <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>gpsVegano</NavbarHeading>
            <NavbarDivider />
            <Button intent="success" minimal={true} icon="home" text="Home" />
            <Button
              intent="success"
              minimal={true}
              icon="document"
              text="Files"
            />
          </NavbarGroup>
        </Navbar>
      </header>
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
