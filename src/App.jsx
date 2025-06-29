import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import { Features } from "./components/Features";
import HowItWorks from "./HowItWorks";
import Footer from "./components/Footer";

import "./index.css";
const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;
