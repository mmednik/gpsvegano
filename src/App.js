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
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [geoStatus, setGeoStatus] = useState(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setGeoStatus(false);
    } else {
      setGeoStatus(false);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeoStatus(true);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setGeoStatus(false);
        }
      );
    }
  };

  const fetchData = async () => {
    let response;
    const apiEndpoint = "https://gpsvegano.cdn.prismic.io/api/v2";
    const accessToken = process.env.REACT_APP_PRISMICACCESSTOKEN;
    const Client = Prismic.client(apiEndpoint, { accessToken });
    if (geoStatus && lat && lng) {
      response = await Client.query(
        Prismic.Predicates.geopoint.near("my.post.geo", lat, lng, 10),
        { orderings: "[document.last_publication_date desc]" }
      );
    } else {
      response = await Client.query(
        Prismic.Predicates.at("document.type", "post"),
        { orderings: "[document.last_publication_date desc]" }
      );
    }
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
      <button onClick={getLocation}>Get Location</button>
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
