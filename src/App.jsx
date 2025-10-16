import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Offer from "./Components/Offer";
import Cards from "./Components/Cards";
import IntelliText from "./Components/IntelliText";
import About from "./Components/About";

import ProjectsSection from "./Components/ProjectSection";
import WhyChoose from "./Components/WhyChoose";
import Contacts from "./Components/Contacts";
import Gallery from "./Components/Gallery"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <Header classnamme="" />
      <Hero />
      <Offer />
      <Cards />
      <IntelliText />
      <About />
      <ProjectsSection />
      <Gallery/>
      <Contacts/>
      <Footer/>
    </>
  );
}

export default App;
