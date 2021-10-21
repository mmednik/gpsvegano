import React from "react";

import "./StoreSkeleton.scss";

function Store({ index, type }) {
  switch (type) {
    case "list":
      return (
        <div
          className="store"
          key={index}
        >
          <h5 className="bp3-skeleton">Store</h5>
          <span>Tag</span>
          <img alt="Store skeleton" />
        </div>
      );

    default:
      return (
        <div
          className="store"
          key={index}
        >
          <h5>Store</h5>
          <span>Tag</span>
          <p>Sample</p>
        </div>
      );
  }
}

export default Store;
