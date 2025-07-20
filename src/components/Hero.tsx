import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
     backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/nursery-plants.jpg')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white pt-32 pb-16">
        <div className="flex items-center justify-center mb-6 gap-x-3 flex-wrap">
  <img 
    src="/harihara_logo.jpg" 
    alt="Harihara Nursery Logo" 
    className="w-14 h-14 md:w-20 md:h-20 rounded-full border-4 border-green-400 object-contain bg-white p-1"
  />
  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center">
    Harihara Nursery
  </h1>
</div>

        
        <p className="text-xl md:text-2xl mb-4 font-light">
          "Creating Beautiful Landscapes, Growing Green Dreams"
        </p>
        
        <p className="text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed text-justify">
       Welcome to Harihara Nursery — your trusted partner for premium landscaping solutions and quality plants. 
       We specialize in creating stunning landscapes and providing the finest plants to transform your spaces into green paradises.
       </p>
        
        <button 
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center mx-auto"
        >
          Explore Our Plants
          <ChevronRight className="ml-2 w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;