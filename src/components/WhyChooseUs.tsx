import React from 'react';
import { MapPin, Leaf, Users, Truck, Palette, CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Expert Landscaping Solutions",
      description: "Professional landscape design and installation services with attention to detail and creative vision."
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: "Diverse, High-Quality Selection",
      description: "Wide variety of premium plants including ornamental, flowering, indoor, and outdoor varieties."
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Comprehensive Service",
      description: "From landscape design to plant supply, we provide complete solutions for all your green space needs."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: "Quality & Reliability",
      description: "Commitment to excellence in every project with reliable service and high-quality materials."
    },
    {
      icon: <Palette className="w-8 h-8 text-green-600" />,
      title: "Custom Design Solutions",
      description: "Tailored landscaping designs that match your vision, space, and budget requirements."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Expert Care & Support",
      description: "Professional guidance and ongoing support to ensure your landscapes and plants thrive."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🌟 Why Choose Harihara Nursery
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:translate-y-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;