import SongList from "./components/SongList";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import {SongsSection} from "./components/SongsSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/songs" element={<SongsSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;