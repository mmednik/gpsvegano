import React from "react";
import { Box } from "@chakra-ui/react";
import { SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";

import "./StoreSkeleton.scss";

function StoreSkeleton({ type }) {
  switch (type) {
    case "list":
      return (
        <Box
          pos="relative"
          width="24rem"
          height="10rem"
          boxShadow="lg"
          margin="2"
          padding="4"
        >
          <SkeletonText noOfLines={4} />
          <SkeletonCircle
            pos="absolute"
            right={2}
            bottom={4}
            borderRadius="full"
            width="75px"
            height="75px"
          />
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
