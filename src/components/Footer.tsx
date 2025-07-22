// import React from 'react';
// import { Facebook, Instagram, MessageCircle } from 'lucide-react';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div className="col-span-2">
//             <div className="flex items-center mb-4">
//               <img 
//                 src="/harihara_logo.jpg" 
//                 alt="Harihara Nursery Logo" 
//                 className="w-20 h-20 mr-5 rounded-full object-contain bg-white p-2 border-4 border-green-500"
//               />
//               <h3 className="text-2xl font-bold">Harihara Nursery</h3>
//             </div>
//             <p className="text-gray-300 mb-4">
//               Creating Beautiful Landscapes, Growing Green Dreams. Your trusted partner for premium landscaping and quality plants.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
//                 <Facebook className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
//                 <Instagram className="w-5 h-5" />
//               </a>
//               <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
//               <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
//               <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
//               <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
//             <div className="space-y-2 text-gray-300">
//               <p>+91 98765 43210</p>
//               <p>info@kadiamgreen.com</p>
//               <p>Kadiam, East Godavari</p>
//               <p>Andhra Pradesh - 533126</p>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-300">
//             © Copyright 2025 Harihara Nursery. All rights reserved.
//           </p>
//           <p className="text-gray-400 mt-2">
//             Crafted with ❤ for Green Spaces
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/harihara_logo.jpg"  // 🔁 Make sure this image is placed in public folder
                alt="Harihara Nursery Logo" 
                className="w-28 h-auto mr-5 object-contain"  // Removed rounded styles
              />
              <h3 className="text-2xl font-bold">Harihara Nursery</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Creating Beautiful Landscapes, Growing Green Dreams. Your trusted partner for premium landscaping and quality plants.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/919646195555" className="bg-green-600 hover:bg-green-700 p-2 rounded-full transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>+91 9646195555</p>
              <p>info@hariharanursery.com</p>
              <p>Kadiam, East Godavari</p>
              <p>Andhra Pradesh - 533126</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © Copyright 2025 Harihara Nursery. All rights reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Crafted with ❤ for Green Spaces
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
