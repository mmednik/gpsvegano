import React from "react";
import { Box, Flex, Spacer, Link } from "@chakra-ui/react";
import { AiOutlineBarcode, AiFillShop, AiOutlineBars } from "react-icons/ai";

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
          <AiOutlineBarcode className="bottom-icon" />
        </Link>
        <Spacer />
        <Link>
          <AiFillShop className="bottom-icon" color="green" />
        </Link>
        <Spacer />
        <Link>
          <AiOutlineBars className="bottom-icon" />
        </Link>
      </Flex>
    </Box>
  );
}

export default BottomNav;
