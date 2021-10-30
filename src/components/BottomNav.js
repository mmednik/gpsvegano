import React from "react";
import { Box } from "@chakra-ui/react";

import "./BottomNav.scss";

function BottomNav() {
  return (
    <Box bgColor="white" pos="fixed" bottom="0" width="100%" height="50px" boxShadow="lg">
      Bottom Nav
    </Box>
  );
}

export default BottomNav;
