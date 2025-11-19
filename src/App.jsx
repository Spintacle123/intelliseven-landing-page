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
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />

      {/* HOME */}
      <section >
        <Hero />
      </section>

      {/* SERVICES */}
      <section >
        <Offer />
        <Cards />
      </section>

      {/* ABOUT US */}
      <section id="about-us">
        <IntelliText />
        <About />
      </section>

      {/* MEET OUR TEAM  */}
      <section id="meet-our-team">
        <ProjectsSection />
      </section>

      {/* DOCUMENTATION */}
      <section id="documentation">
        <Gallery />
      </section>

      <Contacts />
      <Footer />
    </>
  );
}

export default App;
