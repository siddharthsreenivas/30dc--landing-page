import { BrowserRouter } from "react-router-dom";
import About from "./Components/About";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-white min-h-screen scroll-smooth  font-spline text-gray-950 selection:bg-primary-500 selection:text-white">
        <Navbar />
        <Hero />
        <Testimonials />
        <Pricing />
        <Features />
        <About />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
