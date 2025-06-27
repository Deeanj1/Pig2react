import React from "react";
import Header from "./Static/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Static/Footer";
import PiggyBank from "./Pages/PiggyBank";
import Invest from "./Pages/Invest";
import Stories from "./Pages/Stories";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/piggybank" element={<PiggyBank />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;