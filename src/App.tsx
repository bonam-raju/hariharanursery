import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingContacts from './components/FloatingContacts';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingContacts />
    </div>
  );
}

export default App;