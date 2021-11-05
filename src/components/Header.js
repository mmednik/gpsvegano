import React from "react";
import {
  Flex,
  Spacer,
  Heading,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { IoMenu } from "react-icons/io5";

import "./Header.scss";

function Header() {
  return (
    <header>
      <Flex
        p={4}
        pos="fixed"
        top="0"
        w="100vw"
        className="header"
        zIndex="sticky"
      >
        <Heading className="title">gpsVegano</Heading>
        <Spacer />
        <Menu>
          <MenuButton
            className="menu"
            border="0"
            as={IconButton}
            aria-label="Main menu"
            icon={<IoMenu />}
            variant="outline"
          />
        </Menu>
      </Flex>
    </header>
  );
}

export default Header;
