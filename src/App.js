import { Classes, Alignment, Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Button } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading>gpsVegano</NavbarHeading>
          <NavbarDivider />
          <Button className={Classes.MINIMAL} icon="home" text="Home" />
          <Button className={Classes.MINIMAL} icon="document" text="Files" />
        </NavbarGroup>
      </Navbar>
    </div>
  );
}

export default App;
