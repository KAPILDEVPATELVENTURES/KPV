
'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: "Kapildev Patel Ventures",
    subtitle: "Empowering Business | Enabling Growth | Elevating Lives.",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/8221ee7abcb6fcab86366923596a1cb8.png"
  },
  {
    id: 2,
    title: "FINANCITY Portfolio Landmark",
    subtitle: "Your Roadmap To Financial Prosperity",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/dab312aa188a61aff2941f0baa725281.png"
  },
  {
    id: 3,
    title: "AshaNidhi FINANCE",
    subtitle: "Where Hope Meets Finance",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/1cb70cd0809b800d3eaa7aa4fb8adbe1.png"
  },
  {
    id: 4,
    title: "NexaVentures",
    subtitle: "Bold Ideas, Build Empire",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/f907fd1771543a533bb2c276eb407195.png"
  },
  {
    id: 5,
    title: "Estate Development & Consulting Bureau",
    subtitle: "Building Visions. Shaping Communities.",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/d223b02e8eabcf5266ce20d280bea18c.png"
  },
  {
    id: 6,
    title: "Ghar Shringar",
    subtitle: "Spiritual Décor for Inspired Living",
    bgImage: "https://readdy.ai/api/search-image?query=Beautiful%20Indian%20home%20interior%20with%20spiritual%20d%C3%A9cor%2C%20traditional%20and%20modern%20fusion%2C%20elegant%20pooja%20room%2C%20spiritual%20artifacts%2C%20warm%20ambient%20lighting%2C%20cultural%20decorative%20items%2C%20inspired%20living%20space%2C%20peaceful%20home%20environment&width=1920&height=1080&seq=kpv6&orientation=landscape"
  },
  {
    id: 7,
    title: "Hyginex Global",
    subtitle: "Beyond Clean. Truly Protected.",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/2c94ff4d34672c3b16710d5dd52fd291.png"
  },
  {
    id: 8,
    title: "HIKASO",
    subtitle: "Simple Living. Smart Home.",
    bgImage: "https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/4e8339713bfd596ab38b36c5e85236d7.jfif"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.bgImage})` }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
            <div
              className={`max-w-4xl w-full transition-all duration-1000 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 leading-tight px-2">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-light leading-relaxed px-2">
                {slide.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 text-white cursor-pointer z-10"
      >
        <i className="ri-arrow-left-line text-sm sm:text-lg lg:text-xl"></i>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-all duration-300 text-white cursor-pointer z-10"
      >
        <i className="ri-arrow-right-line text-sm sm:text-lg lg:text-xl"></i>
      </button>

      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
