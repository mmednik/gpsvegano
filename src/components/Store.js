import React from "react";
import {
  FaChrome,
  FaInstagram,
  FaFacebook,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
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
            {offline && <Badge colorScheme="blue">Local</Badge>}
            {delivery && <Badge colorScheme="pink">Delivery</Badge>}
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          <Flex align="baseline" mt={2}>
            {web && <a href={web} target="_blank"><FaChrome /></a>}
            {instagram && <a href={instagram} target="_blank"><FaInstagram /></a>}
            {facebook && <a href={facebook} target="_blank"><FaFacebook /></a>}
            {phone && <a href={`tel:+${phone}`} target="_blank"><FaPhone /></a>}
            {email && <a href={`mailto:${email}`} target="_blank"><FaEnvelope /></a>}
          </Flex>
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
