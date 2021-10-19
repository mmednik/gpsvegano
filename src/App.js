import { useState, useEffect } from "react";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";

import Header from "./components/Header";
import Store from "./components/Store";

import "./App.scss";

function App() {
  const apiEndpoint = "https://gpsvegano.cdn.prismic.io/api/v2";
  const accessToken = process.env.REACT_APP_PRISMICACCESSTOKEN;
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [docs, setDocsData] = useState(null);

  useEffect(() => {
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
      return "/post/" + doc.uid;
    }

    // Default to homepage
    return "/";
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="stores">
          {docs ? (
            docs.map((doc, i) => (
              <Store
                key={i}
                title={RichText.asText(doc.data.title)}
                tag={doc.data.products}
                img={doc.data.image.url}
                body={RichText.asText(doc.data.post_body)}
                link={linkResolver}
                type="list"
              />
          ))
          ) : (
            <div>No content</div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
