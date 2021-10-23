import React from "react";
import { Box } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";

import "./StoreSkeleton.scss";

function StoreSkeleton({ type }) {
  switch (type) {
    case "list":
      return (
        <Box boxSize="2xs" margin="2" padding="4" borderWidth="1px">
          <SkeletonCircle width="100px" height="100px" mb={4} />
          <SkeletonText noOfLines={4} />
        </Box>
      );

    default:
      return (
        <div className="store">
          <h5>Store</h5>
          <span>Tag</span>
          <p>Sample</p>
        </div>
      );
  }
}

export default StoreSkeleton;
