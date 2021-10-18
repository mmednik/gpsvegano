import React from "react";
import {
  Button,
  Card,
  Elevation,
} from "@blueprintjs/core";

import "./Store.scss";

function Store({key, title, img, body, link}) {
  return (
    <Card className="store" key={key} interactive={true} elevation={Elevation.ONE}>
      <h5>
        <a href="link-to-store">{title}</a>
      </h5>
      <p>{body}</p>
    </Card>
  );
}

export default Store;
