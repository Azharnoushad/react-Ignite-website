import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
