import React from "react";
import { Card, Elevation, Tag } from "@blueprintjs/core";

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
  email
}) {

  let offlineTag;
  if(offline) {
    offlineTag = <Tag minimal={true}>Local</Tag>
  }

  let deliveryTag;
  if(delivery) {
    deliveryTag = <Tag minimal={true}>Delivery</Tag>
  }

  let webLink;
  if(web) {
    webLink = <Tag minimal={true}>{web}</Tag>
  }

  let instagramLink;
  if(instagram) {
    instagramLink = <Tag minimal={true}>{instagram}</Tag>
  }

  let facebookLink;
  if(facebook) {
    facebookLink = <Tag minimal={true}>{facebook}</Tag>
  }

  let phoneLink;
  if(phone) {
    phoneLink = <Tag minimal={true}>{phone}</Tag>
  }

  let emailLink;
  if(email) {
    emailLink = <Tag minimal={true}>{email}</Tag>
  }

  switch (type) {
    case "list":
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <div className="content">
            <a href={link}>
              <h5 className="title">{title}</h5>
              <Tag minimal={true}>{tag}</Tag>
              {offlineTag}
              {deliveryTag}
              {webLink}
              {instagramLink}
              {facebookLink}
              {phoneLink}
              {emailLink}
              <img
                className="image"
                src={img}
                width="150"
                height="150"
                alt={`Logo de ${title}`}
              />
            </a>
          </div>
        </Card>
      );

    default:
      return (
        <Card
          className="store"
          key={index}
          interactive={true}
          elevation={Elevation.ONE}
        >
          <h5>
            <a href="link-to-store">{title}</a>
          </h5>
          <p>{body}</p>
        </Card>
      );
  }
}

export default Store;
