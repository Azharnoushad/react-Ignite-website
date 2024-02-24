import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalStyles />

      <Routes>
        <Route path="/game/:id" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
