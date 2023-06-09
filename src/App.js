import { useEffect } from "react";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Benefit from "./Components/Benefits";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Benefit />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
