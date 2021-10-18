import React from "react";
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button
} from "@blueprintjs/core";

import "./Header.scss";

function Header() {
  return (
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
  );
}

export default Header;
