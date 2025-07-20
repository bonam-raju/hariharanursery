// import React from 'react';
// import { Sprout, Heart, Award } from 'lucide-react';

// const About = () => {
//   return (
//     <section id="about" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             🌿 About Harihara Nursery
//           </h2>
//         </div>
        
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6">
//             <p className="text-lg leading-relaxed text-gray-700">
//             Established in 2015, Harihara Nursery is a family-owned wholesale plant nursery and landscaping business rooted in generations of farming experience. Our mission is to supply premium quality plants and provide expert landscaping services that transform any space into a thriving green environment.
//            </p>
            
//             <p className="text-lg leading-relaxed text-gray-700">
//              We proudly operate our own nursery and farmland, ensuring full control over plant quality and health. Unlike many others, we do not depend on external vendors or third-party growers — every plant we supply is grown and nurtured by us. This independence allows us to consistently deliver fresh, healthy, and affordable plants in bulk.
//             </p>

            
//            <p className="text-lg leading-relaxed text-gray-700">
//            With over a decade of experience, we have earned the trust of homeowners, landscapers, and developers alike. Whether you need plants for a personal garden or a large-scale project, Harihara Nursery is your go-to partner for reliable supply and creative green solutions.
//           </p>
//           </div>
          
//           <div className="relative">
//             <img 
//               src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
//               alt="Kadiam nursery plants" 
//               className="rounded-lg shadow-2xl"
//             />
//             <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
//           </div>
//         </div>
        
//         <div className="grid md:grid-cols-3 gap-8 mt-16">
//           <div className="text-center group">
//             <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
//               <Sprout className="w-10 h-10 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
//             <p className="text-gray-600">Decades of horticultural expertise</p>
//           </div>
          
//           <div className="text-center group">
//             <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
//               <Heart className="w-10 h-10 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Family Legacy</h3>
//             <p className="text-gray-600">Generations of plant care wisdom</p>
//           </div>
          
//           <div className="text-center group">
//             <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
//               <Award className="w-10 h-10 text-green-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
//             <p className="text-gray-600">Excellence in every plant we grow</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { Sprout, Heart, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            🌿About us
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-justify">
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              Established in 2015, Harihara Nursery is a family-owned wholesale plant nursery and landscaping business rooted in generations of farming experience. Our mission is to supply premium quality plants and provide expert landscaping services that transform any space into a thriving green environment.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              We proudly operate our own nursery and farmland, ensuring full control over plant quality and health. Unlike many others, we do not depend on external vendors or third-party growers — every plant we supply is grown and nurtured by us. This independence allows us to consistently deliver fresh, healthy, and affordable plants in bulk.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-gray-700">
              With over a decade of experience, we have earned the trust of homeowners, landscapers, and developers alike. Whether you need plants for a personal garden or a large-scale project, Harihara Nursery is your go-to partner for reliable supply and creative green solutions.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full">
            <img 
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Kadiam nursery plants" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-lg"></div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center group">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Sprout className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">10+ Years Experience</h3>
            <p className="text-gray-600 text-sm">Decades of horticultural expertise</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Heart className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Family Legacy</h3>
            <p className="text-gray-600 text-sm">Generations of plant care wisdom</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
              <Award className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">Excellence in every plant we grow</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
