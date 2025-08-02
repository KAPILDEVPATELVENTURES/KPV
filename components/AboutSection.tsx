
'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-3">
            <div className={`transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                About Kapildev Patel Ventures
              </h2>
              
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Kapildev Patel Ventures stands as a beacon of visionary leadership in the modern business landscape. Our multi-sector enterprise is built on the foundation of empowering businesses, enabling sustainable growth, and elevating lives across communities.
                </p>
                
                <p>
                  With a diverse portfolio spanning finance, real estate, technology, lifestyle, and healthcare, we have established ourselves as pioneers in creating value-driven solutions that address the evolving needs of today's dynamic market.
                </p>
                
                <p>
                  Our commitment to excellence, innovation, and social impact drives every venture we undertake. We believe in building not just businesses, but sustainable ecosystems that contribute to the greater good of society while delivering exceptional returns to our stakeholders.
                </p>
                
                <p>
                  Through strategic partnerships, cutting-edge technology, and unwavering dedication to quality, Kapildev Patel Ventures continues to set new benchmarks in corporate leadership and social responsibility.
                </p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-100">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                    <i className="ri-lightbulb-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
                  To create a diversified business ecosystem that fosters innovation, drives economic growth, and makes a meaningful impact on society. We are committed to building ventures that not only generate sustainable profits but also contribute to the betterment of communities and the environment.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 text-sm sm:text-base"></i>
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">Visionary Leadership</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 text-sm sm:text-base"></i>
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">Integrity & Excellence</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 text-sm sm:text-base"></i>
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">Social Impact</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <i className="ri-check-line text-blue-600 text-sm sm:text-base"></i>
                    </div>
                    <span className="text-gray-800 font-medium text-sm sm:text-base">Innovation & Growth</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
