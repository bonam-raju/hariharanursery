import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you deliver plants across India?",
      answer: "Yes, we provide safe and timely delivery to most locations across India, including bulk orders."
    },
    {
      question: "What is the minimum order for wholesale?",
      answer: "Minimum orders start from 100 plants, but we customize based on your needs."
    },
    {
      question: "Do you provide assistance for setting up gardens?",
      answer: "Absolutely. We offer landscape consultation and plant selection based on your space, budget, and climate."
    },
    {
      question: "Can we visit your nursery in Kadiam?",
      answer: "Yes, you are most welcome! Visit us to explore thousands of plants and see our operations."
    },
    {
      question: "Do your plants come with care instructions?",
      answer: "Yes, we share basic care tips with every order and offer expert help on request."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            ❓ Frequently Asked Questions
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-green-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-600" />
                )}
              </button>
              {openFAQ === index && (
                <div className="bg-green-50 p-6 rounded-b-lg border-t border-green-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;