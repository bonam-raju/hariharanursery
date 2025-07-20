import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Ornamental Plants',
      description: 'Colorful foliage, palms, ficus, and crotons'
    },
    {
      url: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Flowering Shrubs',
      description: 'Hibiscus, bougainvillaea, roses in bloom'
    },
    {
      url: 'https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Indoor Plants',
      description: 'Snake plant, ZZ plant, areca palm in pots'
    },
    {
      url: 'https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Fruit Saplings',
      description: 'Mango, guava, pomegranate, lemon'
    },
    {
      url: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Landscaping Projects',
      description: 'Beautiful garden makeovers'
    },
    {
      url: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      title: 'Nursery in Bloom',
      description: 'Our nursery in full glory'
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            🌸 Green Beauty in Every Frame
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={image.url} 
                alt={image.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold mb-1">{image.title}</h3>
                <p className="text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;