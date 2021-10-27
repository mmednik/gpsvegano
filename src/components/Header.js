import React from "react";
import {
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

import "./Header.scss";

function Header() {
  return (
    <header>
      <Flex p={4}>
        <Heading className="title">gpsVegano</Heading>
        <Spacer />
        <Menu>
          <MenuButton
            className="menu"
            border="0"
            as={IconButton}
            aria-label="Options"
            icon={<AiOutlineMenu />}
            variant="outline"
          />
        </Menu>
      </Flex>
    </header>
  );
}

export default Header;
