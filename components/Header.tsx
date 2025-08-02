
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://static.readdy.ai/image/c7495d2cda79f391aef64d149ab45bc9/d35ee6285aa5597666195b28a7629e31.png" 
              alt="Kapildev Patel Ventures" 
              className="h-8 sm:h-10 lg:h-12 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('brand')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Brand
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`font-medium transition-colors duration-300 hover:text-blue-600 cursor-pointer whitespace-nowrap ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden w-8 h-8 flex items-center justify-center cursor-pointer ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('brand')}
                className="block w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer py-2"
              >
                Brand
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-medium text-gray-800 hover:text-blue-600 transition-colors duration-300 cursor-pointer py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
