import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";

import "./App.scss";

import Header from "./components/Header";

import SearchBox from "./components/SearchBox";
import BottomNav from "./components/BottomNav";

import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <SearchBox />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
      </BrowserRouter>
      <BottomNav />
    </ChakraProvider>
  );
}

export default App;
