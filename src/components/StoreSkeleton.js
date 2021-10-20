import React from "react";
import { Card, Elevation } from "@blueprintjs/core";

import "./StoreSkeleton.scss";

function Store({ index, type }) {
  switch (type) {
    case "list":
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <h5 className="bp3-skeleton">Store</h5>
          <span className="bp3-skeleton">Tag</span>
          <img className="bp3-skeleton" alt="Store skeleton" />
        </Card>
      );

    default:
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <h5 className="bp3-skeleton">Store</h5>
          <span className="bp3-skeleton">Tag</span>
          <p>Sample</p>
        </Card>
      );
  }
}

export default Store;
