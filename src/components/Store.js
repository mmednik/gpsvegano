import React from "react";

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
    offlineTag = <span>Local</span>
  }

  let deliveryTag;
  if(delivery) {
    deliveryTag = <span>Delivery</span>
  }

  let webLink;
  if(web) {
    webLink = <span>{web}</span>
  }

  let instagramLink;
  if(instagram) {
    instagramLink = <span>{instagram}</span>
  }

  let facebookLink;
  if(facebook) {
    facebookLink = <span>{facebook}</span>
  }

  let phoneLink;
  if(phone) {
    phoneLink = <span>{phone}</span>
  }

  let emailLink;
  if(email) {
    emailLink = <span>{email}</span>
  }

  switch (type) {
    case "list":
      return (
        <div
          className="store"
          key={index}
        >
          <div className="content">
            <a href={link}>
              <h5 className="title">{title}</h5>
              <span>{tag}</span>
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
        </div>
      );

    default:
      return (
        <div
          className="store"
          key={index}
        >
          <h5>
            <a href="link-to-store">{title}</a>
          </h5>
          <p>{body}</p>
        </div>
      );
  }
}

export default Store;
