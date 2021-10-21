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
  let offlineTag;
  if (offline) {
    offlineTag = <span>Local</span>;
  }

  let deliveryTag;
  if (delivery) {
    deliveryTag = <span>Delivery</span>;
  }

  let webLink;
  if (web) {
    webLink = <span>{web}</span>;
  }

  let instagramLink;
  if (instagram) {
    instagramLink = <span>{instagram}</span>;
  }

  let facebookLink;
  if (facebook) {
    facebookLink = <span>{facebook}</span>;
  }

  let phoneLink;
  if (phone) {
    phoneLink = <span>{phone}</span>;
  }

  let emailLink;
  if (email) {
    emailLink = <span>{email}</span>;
  }

  switch (type) {
    case "list":
      return (
        <Box p="5" maxW="320px" borderWidth="1px" data-link={link}>
          <Image borderRadius="md" src={img} alt={`Logo de ${title}`} />
          <Flex align="baseline" mt={2}>
            <Badge colorScheme="pink">{tag}</Badge>
          </Flex>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {title}
          </Text>
          {offlineTag}
          {deliveryTag}
          {webLink}
          {instagramLink}
          {facebookLink}
          {phoneLink}
          {emailLink}
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
