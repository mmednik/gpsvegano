import { useState, useEffect } from "react";

import { ChakraProvider, Flex } from "@chakra-ui/react";

import Prismic from "@prismicio/client";
import { RichText, Link } from "prismic-reactjs";

import Header from "./components/Header";
import StoreSkeleton from "./components/StoreSkeleton";
import Store from "./components/Store";

import "./App.scss";

function App() {
  const [docs, setDocsData] = useState(null);

  useEffect(() => {
    const apiEndpoint = "https://gpsvegano.cdn.prismic.io/api/v2";
    const accessToken = process.env.REACT_APP_PRISMICACCESSTOKEN;
    const Client = Prismic.client(apiEndpoint, { accessToken });
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "post")
      );
      if (response) {
        setDocsData(response.results);
      }
    };
    fetchData();
  }, []);

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
    </ChakraProvider>
  );
}

export default App;
