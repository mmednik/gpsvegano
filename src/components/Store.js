import React from "react";
import {
  Button,
  Card,
  Elevation,
} from "@blueprintjs/core";

import "./Store.scss";

function Store() {
  return (
    <Card className="store" interactive={true} elevation={Elevation.ONE}>
      <h5>
        <a href="link-to-store">Card heading</a>
      </h5>
      <p>Card content</p>
      <Button>Submit</Button>
    </Card>
  );
}

export default Store;
