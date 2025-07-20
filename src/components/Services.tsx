import React from 'react';
import { TreePine, Flower2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TreePine className="w-12 h-12 text-green-600" />,
      image: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Professional Landscaping Services",
      description: "Complete landscape design and installation services for residential, commercial, and public spaces. From concept to completion, we create stunning outdoor environments that enhance your property's beauty and value."
    },
    {
      icon: <Flower2 className="w-12 h-12 text-green-600" />,
      image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      title: "Premium Plants & Nursery Sales",
      description: "Wide selection of high-quality plants including ornamental plants, flowering shrubs, indoor plants, outdoor plants, fruit trees, and specialty varieties. Perfect for gardens, landscaping projects, and home decoration."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🛠 Our Services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Additional Services</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">🌳 Landscaping Includes:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Garden Design & Planning</li>
                  <li>• Lawn Installation & Maintenance</li>
                  <li>• Irrigation System Setup</li>
                  <li>• Hardscape Installation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">🌱 Plant Categories:</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ornamental & Decorative Plants</li>
                  <li>• Flowering Shrubs & Trees</li>
                  <li>• Indoor & Outdoor Varieties</li>
                  <li>• Fruit Trees & Saplings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;