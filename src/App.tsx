import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Network from "./components/Network";
import Tracking from "./components/Tracking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Network />
        <Tracking />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;