import React from "react";
import { Flex, Input, IconButton } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

import "./SearchBox.scss";

function SearchBox() {
  return (
    <Flex mt={16} padding={4}>
      <Input placeholder="Buscar local..." />
      <IconButton aria-label="Search database" icon={<IoSearch />} />
    </Flex>
  );
}

export default SearchBox;
