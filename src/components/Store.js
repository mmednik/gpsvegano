import React from "react";
import {
  AiFillChrome,
  AiFillInstagram,
  AiFillFacebook,
  AiFillPhone,
  AiFillMail,
  AiOutlineMore,
} from "react-icons/ai";
import {
  Box,
  Image,
  Flex,
  Badge,
  Text,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";

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
          width="24rem"
          height="10rem"
          boxShadow="lg"
          margin="2"
          padding="4"
          data-link={link}
        >
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          <Badge colorScheme="green">{tag}</Badge>
          <Flex align="baseline" mt={2}>
            {web && (
              <Box mr={2}>
                <a href={web} target="_blank" rel="noreferrer">
                  <AiFillChrome size={32} color="#2D3748" />
                </a>
              </Box>
            )}
            {instagram && (
              <Box mr={2}>
                <a href={instagram} target="_blank" rel="noreferrer">
                  <AiFillInstagram size={32} color="#2D3748" />
                </a>
              </Box>
            )}
            {facebook && (
              <Box mr={2}>
                <a href={facebook} target="_blank" rel="noreferrer">
                  <AiFillFacebook size={32} color="#2D3748" />
                </a>
              </Box>
            )}
            {phone && (
              <Box mr={2}>
                <a href={`tel:+${phone}`} target="_blank" rel="noreferrer">
                  <AiFillPhone size={32} color="#2D3748" />
                </a>
              </Box>
            )}
            {email && (
              <Box mr={2}>
                <a href={`mailto:${email}`} target="_blank" rel="noreferrer">
                  <AiFillMail size={32} color="#2D3748" />
                </a>
              </Box>
            )}
          </Flex>
          <Flex align="baseline" mt={2}>
            {offline && <Badge colorScheme="gray">Local</Badge>}
            {delivery && <Badge colorScheme="gray">Delivery</Badge>}
          </Flex>
          <Image
            pos="absolute"
            right={2}
            bottom={4}
            borderRadius="full"
            width="75px"
            height="75px"
            src={img}
            alt={`Logo de ${title}`}
          />
          <Menu>
            <MenuButton
              className="menu"
              pos="absolute"
              right={2}
              top={4}
              border="0"
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMore />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>Informar problema</MenuItem>
              <MenuItem>Reportar local</MenuItem>
            </MenuList>
          </Menu>
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
