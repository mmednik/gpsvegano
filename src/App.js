import { useState, useEffect } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import Prismic from "@prismicio/client";
import { RichText, Link } from "prismic-reactjs";
import { prismicApiEndpoint, prismicAccessToken } from './prismic-configuration';

import "./App.scss";

import Header from "./components/Header";
import StoreSkeleton from "./components/StoreSkeleton";
import Store from "./components/Store";
import SearchBox from "./components/SearchBox";
import BottomNav from "./components/BottomNav";

function App() {
  const [docs, setDocsData] = useState(null);
  // const [search, setSearch] = useState("comida");
  
  const fetchData = async () => {
    let response;
    const apiEndpoint = prismicApiEndpoint;
    const accessToken = prismicAccessToken;
    const Client = Prismic.client(apiEndpoint, { accessToken });
 /*   if (geoStatus && lat && lng) {
      response = await Client.query(
        Prismic.Predicates.geopoint.near("my.post.geo", lat, lng, 10),
        { orderings: "[document.last_publication_date desc]" }
      );
    } else {*/
      response = await Client.query(
        Prismic.Predicates.at("document.type", "post"),
        // Prismic.Predicates.fulltext("document", search),
        { orderings: "[document.last_publication_date desc]" }
      );
    /*}*/
    if (response) {
      setDocsData(response.results);
    }
  };

  useEffect(() => {
    fetchData();
  });

  function linkResolver(doc) {
    // Define the url depending on the document type
    if (doc.type === "post") {
      return "/store/" + doc.uid;
    }

    // Default to homepage
    return "/";
  }

  return (
    <ChakraProvider>
      <Header />
      <SearchBox />
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
      <BottomNav />
    </ChakraProvider>
  );
}

export default App;
