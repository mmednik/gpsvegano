import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { IoBarcode, IoStorefront, IoList } from "react-icons/io5";

import "./BottomNav.scss";

function BottomNav() {
  return (
    <Box
      className="bottom-nav"
      bgColor="white"
      pos="fixed"
      bottom="-1px"
      width="100%"
      height="50px"
      p={2}
    >
      <Flex mx={8}>
        <Link>
          <IoBarcode className="bottom-icon" />
        </Link>
        <Spacer />
        <Link>
          <IoStorefront className="bottom-icon" color="#ff61ea" />
        </Link>
        <Spacer />
        <Link>
          <IoList className="bottom-icon" />
        </Link>
      </Flex>
    </Box>
  );
}

export default BottomNav;
