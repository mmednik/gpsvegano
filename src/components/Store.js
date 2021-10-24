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
        <Box
          pos="relative"
          width="18rem"
          height="8rem"
          boxShadow="lg"
          margin="2"
          padding="4"
          data-link={link}
        >
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="green">{tag}</Badge>
            {offline && <Badge colorScheme="blue">Local</Badge>}
            {delivery && <Badge colorScheme="pink">Delivery</Badge>}
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          <Flex align="baseline" mt={2}>
            {web && (
              <Box mr={2}>
                <a href={web} target="_blank" rel="noreferrer">
                  <FaChrome size={28} />
                </a>
              </Box>
            )}
            {instagram && (
              <Box mr={2}>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <FaInstagram size={28} />
                </a>
              </Box>
            )}
            {facebook && (
              <Box mr={2}>
                <a href={facebook} target="_blank" rel="noreferrer">
                  <FaFacebook size={28} />
                </a>
              </Box>
            )}
            {phone && (
              <Box mr={2}>
                <a href={`tel:+${phone}`} target="_blank" rel="noreferrer">
                  <FaPhone size={28} />
                </a>
              </Box>
            )}
            {email && (
              <Box mr={2}>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <FaEnvelope size={28} />
                </a>
              </Box>
            )}
          </Flex>
          <Image
            pos="absolute"
            right={4}
            top={4}
            borderRadius="full"
            boxShadow="lg"
            width={"50px"}
            height="50px"
            src={img}
            alt={`Logo de ${title}`}
          />
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
