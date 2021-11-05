import React from "react";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";

import "./SearchBox.scss";

function SearchBox() {
  return (
    <Flex mt={16} padding={4}>
      <Input placeholder="Buscar local..." />
      <IconButton aria-label="Search database" icon={<AiOutlineSearch />} />
    </Flex>
  );
}

export default SearchBox;
