import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] cursor-none">
      <Navbar />
      <CustomCursor />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
