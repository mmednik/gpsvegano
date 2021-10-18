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
  const accessToken =
    "MC5ZVzNZTWhBQUFCOEFZU3V6.DO-_ve-_ve-_ve-_vRDvv70Jfu-_vTTvv73vv706Ju-_ve-_vWpXVe-_vQ0677-977-977-9dO-_vXxnVu-_vQ";
  const Client = Prismic.client(apiEndpoint, { accessToken });
  const [docs, setDocsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await Client.query(
        Prismic.Predicates.at("document.type", "post")
      );
      if (response) {
        setDocsData(response.results);
        console.log(response.results);
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
            docs.map(doc => (
              <div>
                <h1>{RichText.asText(doc.data.title)}</h1>
                <img alt="cover" src={doc.data.image.url} />
                <RichText
                  render={doc.data.post_body}
                  linkResolver={linkResolver}
                />
              </div>
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
