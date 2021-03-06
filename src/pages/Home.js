import { useState, useEffect } from "react";

import Prismic from "@prismicio/client";
import { RichText, Link } from "prismic-reactjs";
import {
  prismicApiEndpoint,
  prismicAccessToken,
  linkResolver,
} from "../prismic-configuration";

import { Flex } from "@chakra-ui/react";

import StoreSkeleton from "../components/StoreSkeleton";
import Store from "../components/Store";

function Home() {
  const [docs, setDocsData] = useState(null);

  const fetchData = async () => {
    let response;
    const apiEndpoint = prismicApiEndpoint;
    const accessToken = prismicAccessToken;
    const Client = Prismic.client(apiEndpoint, { accessToken });
    response = await Client.query(
      Prismic.Predicates.at("document.type", "post"),
      { orderings: "[document.last_publication_date desc]" }
    );
    if (response) {
      setDocsData(response.results);
    }
  };

  fetchData();

  return (
    <Flex flexWrap="wrap" justifyContent="center">
      {docs ? (
        docs.map((doc, i) => (
          <Store
            key={i}
            index={i}
            title={RichText.asText(doc.data.title)}
            tag={doc.data.products}
            img={doc.data.image.url}
            body={RichText.asText(doc.data.post_body)}
            link={linkResolver(doc)}
            type="list"
            offline={doc.data.offline_store}
            delivery={doc.data.delivery}
            web={Link.url(doc.data.web)}
            instagram={Link.url(doc.data.instagram)}
            facebook={Link.url(doc.data.facebook)}
            phone={doc.data.phone}
            email={doc.data.email}
          />
        ))
      ) : (
        <StoreSkeleton type="list" />
      )}
    </Flex>
  );
}

export default Home;
