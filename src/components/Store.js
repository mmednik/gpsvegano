import React from "react";
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

import "./Store.scss";

function Store({
  index,
  title,
  tag,
  img,
  body,
  link,
  type,
  offline,
  delivery,
  web,
  instagram,
  facebook,
  phone,
  email,
}) {
  switch (type) {
    case "list":
      return (
        <Box p="5" maxW="320px" borderWidth="1px" data-link={link}>
          <Image borderRadius="md" src={img} alt={`Logo de ${title}`} />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="green">{tag}</Badge>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          {offline && <span>Local</span>}
          {delivery && <span>Delivery</span>}
          {web && <span>{web}</span>}
          {instagram && <span>{instagram}</span>}
          {facebook && <span>{facebook}</span>}
          {phone && <span>{phone}</span>}
          {email && <span>{email}</span>}
        </Box>
      );

    default:
      return (
        <div className="store" key={index}>
          <h5>
            <a href="link-to-store">{title}</a>
          </h5>
          <p>{body}</p>
        </div>
      );
  }
}

export default Store;
