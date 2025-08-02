
'use client';

import { useEffect, useRef, useState } from 'react';

const brands = [
  {
    name: "FINANCITY Portfolio Landmark",
    description: "Your Roadmap To Financial Prosperity",
    url: "https://www.financitypl.com",
    icon: "ri-funds-line",
    color: "bg-emerald-500",
    bgImage: "https://readdy.ai/api/search-image?query=Financial%20portfolio%20management%20concept%20with%20charts%20and%20graphs%2C%20modern%20finance%20technology%2C%20investment%20planning%20visualization%2C%20professional%20financial%20services%2C%20wealth%20management%20tools%2C%20Indian%20financial%20market%20elements&width=600&height=400&seq=brand1&orientation=landscape"
  },
  {
    name: "AshaNidhi FINANCE",
    description: "Where Hope Meets Finance",
    url: "https://www.kapildevpatel.com/ashanidhi",
    icon: "ri-hand-heart-line",
    color: "bg-blue-500",
    bgImage: "https://readdy.ai/api/search-image?query=Hope%20and%20finance%20symbolism%20with%20hands%20protecting%20coins%20and%20growing%20plants%2C%20trust%20and%20security%20in%20financial%20services%2C%20warm%20golden%20lighting%2C%20prosperity%20and%20growth%20visualization%2C%20Indian%20cultural%20elements&width=600&height=400&seq=brand2&orientation=landscape"
  },
  {
    name: "NexaVentures",
    description: "Bold Ideas, Build Empire",
    url: "https://www.nexaventures.co.in",
    icon: "ri-rocket-line",
    color: "bg-purple-500",
    bgImage: "https://readdy.ai/api/search-image?query=Startup%20innovation%20and%20empire%20building%20concept%2C%20modern%20tech%20workspace%20with%20entrepreneurs%2C%20bold%20ideas%20visualization%2C%20venture%20capital%20and%20investment%2C%20futuristic%20business%20environment%2C%20growth%20and%20expansion&width=600&height=400&seq=brand3&orientation=landscape"
  },
  {
    name: "Estate Development & Consulting Bureau",
    description: "Building Visions. Shaping Communities.",
    url: "https://www.edcb.in",
    icon: "ri-building-line",
    color: "bg-orange-500",
    bgImage: "https://readdy.ai/api/search-image?query=Real%20estate%20development%20and%20community%20building%2C%20modern%20residential%20projects%2C%20architectural%20consultation%2C%20urban%20planning%20and%20development%2C%20construction%20and%20infrastructure%2C%20Indian%20housing%20projects&width=600&height=400&seq=brand4&orientation=landscape"
  },
  {
    name: "Ghar Shringar",
    description: "Spiritual Décor for Inspired Living",
    url: "https://www.gharshringar.shop",
    icon: "ri-home-heart-line",
    color: "bg-red-500",
    bgImage: "https://readdy.ai/api/search-image?query=Spiritual%20home%20d%C3%A9cor%20and%20interior%20design%2C%20traditional%20Indian%20religious%20artifacts%2C%20beautiful%20pooja%20room%20setup%2C%20cultural%20decorative%20items%2C%20spiritual%20living%20space%2C%20peaceful%20home%20environment&width=600&height=400&seq=brand5&orientation=landscape"
  },
  {
    name: "Hyginex Global",
    description: "Beyond Clean. Truly Protected.",
    url: "https://www.kapildevpatel.com/hyginexglobal",
    icon: "ri-shield-check-line",
    color: "bg-teal-500",
    bgImage: "https://readdy.ai/api/search-image?query=Healthcare%20hygiene%20and%20protection%20services%2C%20medical%20grade%20cleaning%20and%20sanitization%2C%20safety%20and%20protection%20equipment%2C%20clean%20medical%20environment%2C%20health%20and%20wellness%20industry&width=600&height=400&seq=brand6&orientation=landscape"
  },
  {
    name: "HIKASO",
    description: "Simple Living. Smart Home.",
    url: "https://www.hikaso.life",
    icon: "ri-home-wifi-line",
    color: "bg-indigo-500",
    bgImage: "https://readdy.ai/api/search-image?query=Smart%20home%20technology%20and%20simple%20living%2C%20modern%20home%20automation%2C%20intelligent%20lifestyle%20solutions%2C%20contemporary%20Indian%20family%20home%2C%20minimalist%20smart%20home%20design%2C%20lifestyle%20enhancement%20technology&width=600&height=400&seq=brand7&orientation=landscape"
  }
];

export default function BrandSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="brand" 
      ref={sectionRef}
      className="py-16 sm:py-20 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Brand Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Discover our diverse ecosystem of brands, each designed to address unique market needs while maintaining our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
              onClick={() => window.open(brand.url, '_blank')}
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={brand.bgImage} 
                  alt={brand.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className={`absolute top-3 left-3 sm:top-4 sm:left-4 w-10 h-10 sm:w-12 sm:h-12 ${brand.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                  <i className={`${brand.icon} text-lg sm:text-xl`}></i>
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  {brand.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                  {brand.description}
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm sm:text-base">
                  <span>Explore</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 sm:mt-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              Building Tomorrow's Solutions Today
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-2">
              Each brand in our portfolio represents a commitment to excellence, innovation, and meaningful impact. Together, they form a comprehensive ecosystem that addresses the diverse needs of modern businesses and communities, while maintaining the highest standards of quality and integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
