import React from "react";
import { Card, Elevation } from "@blueprintjs/core";

import "./Store.scss";

function Store({ index, title, tag, img, body, link, type }) {
  switch (type) {
    case "list":
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <h5>
            <a href={link}>{title}</a>
          </h5>
          <span>{tag}</span>
          <img src={img} alt={`Logo de ${title}`} />
        </Card>
      );
      break;

    default:
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <h5>
            <a href="link-to-store">{title}</a>
          </h5>
          <p>{body}</p>
        </Card>
      );
      break;
  }
}

export default Store;
