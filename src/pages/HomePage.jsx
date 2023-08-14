import React from "react";
import Nav from "../components/nav/Nav";

import HeroSection from "../components/hero/HeroSection";

import Footer from "../components/footer/Footer";
import Datas from "../components/data/Datas";
import HamburgerMenu from "../components/hamburger/Hamburger";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetails from "../components/item-detail/ItemDetails";

function HomePage() {
  return (
    <>
      <div className="hamburger-byside">
        <HamburgerMenu />
        <Nav />
      </div>
      <HeroSection />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Datas />
              </>
            }
          />
          <Route path="/item/:itemId" element={<ItemDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default HomePage;
