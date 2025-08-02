
'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formType, setFormType] = useState<'partnership' | 'investment' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    brand: '',
    message: ''
  });
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

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kapildev-patel-ventures-749138378',
      icon: 'ri-linkedin-fill',
      color: 'bg-blue-700'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/KPVENTURES4U',
      icon: 'ri-twitter-x-fill',
      color: 'bg-black'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kapildevpatelventures/',
      icon: 'ri-instagram-fill',
      color: 'bg-pink-600'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61578838508198',
      icon: 'ri-facebook-fill',
      color: 'bg-blue-600'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@KapildevPatelVentures',
      icon: 'ri-youtube-fill',
      color: 'bg-red-600'
    }
  ];

  const brands = [
    'FINANCITY Portfolio Landmark',
    'AshaNidhi FINANCE',
    'NexaVentures',
    'Estate Development & Consulting Bureau',
    'Ghar Shringar',
    'Hyginex Global',
    'HIKASO'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, type: formType });
    setShowForm(false);
    setFormType(null);
    setFormData({ name: '', email: '', company: '', brand: '', message: '' });
  };

  const openForm = (type: 'partnership' | 'investment') => {
    setFormType(type);
    setShowForm(true);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 sm:py-20 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://readdy.ai/api/search-image?query=Modern%20corporate%20contact%20and%20communication%20concept%2C%20professional%20business%20meeting%20environment%2C%20Indian%20office%20setting%2C%20global%20connectivity%20symbolism%2C%20modern%20communication%20technology%2C%20professional%20networking%20atmosphere&width=1920&height=800&seq=contact1&orientation=landscape')"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-indigo-900/90" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
            Let's Start a Conversation
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed px-4">
            Ready to explore opportunities together? Connect with us and discover how Kapildev Patel Ventures can help transform your vision into reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Get in Touch</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-100 text-xs sm:text-sm">Email Us</p>
                    <a 
                      href="mailto:connect@kapildevpatel.com"
                      className="text-white font-semibold hover:text-blue-300 transition-colors cursor-pointer text-sm sm:text-base break-all"
                    >
                      connect@kapildevpatel.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-global-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-100 text-xs sm:text-sm">Website</p>
                    <a 
                      href="https://www.kapildevpatel.com"
                      target="_blank"
                      className="text-white font-semibold hover:text-blue-300 transition-colors cursor-pointer text-sm sm:text-base break-all"
                    >
                      www.kapildevpatel.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <i className="ri-building-line text-white text-lg sm:text-xl"></i>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-blue-100 text-xs sm:text-sm">Headquarters</p>
                    <p className="text-white font-semibold text-sm sm:text-base">Borivali West. Mumbai. Maharashtra. India.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 cursor-pointer`}
                    >
                      <i className={`${social.icon} text-lg sm:text-xl`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
          }`}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Ready to Connect?</h3>
                <p className="text-gray-600 text-sm sm:text-base px-2">
                  Whether you're looking to partner with us, explore investment opportunities, or learn more about our ventures, we'd love to hear from you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => openForm('partnership')}
                  className="w-full text-center p-4 sm:p-6 bg-gray-50 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-blue-200 transition-colors">
                    <i className="ri-team-line text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Partnerships</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Strategic collaborations</p>
                </button>
                
                <button
                  onClick={() => openForm('investment')}
                  className="w-full text-center p-4 sm:p-6 bg-gray-50 hover:bg-blue-50 rounded-lg border-2 border-transparent hover:border-blue-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-blue-200 transition-colors">
                    <i className="ri-funds-line text-blue-600 text-lg sm:text-xl"></i>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Investments</h4>
                  <p className="text-xs sm:text-sm text-gray-600">Funding opportunities</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-2xl font-bold text-gray-900 pr-4">
                {formType === 'partnership' ? 'Partnership Inquiry' : 'Investment Inquiry'}
              </h3>
              <button
                onClick={() => { setShowForm(false); setFormType(null); }}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer flex-shrink-0"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand of Interest</label>
                <div className="relative">
                  <select
                    name="brand"
                    value={formData.brand}
                    onChange={(e) => setFormData({...formData, brand: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer pr-8 text-sm sm:text-base"
                    required
                  >
                    <option value="">Select a brand</option>
                    {brands.map((brand) => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  maxLength={500}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-sm sm:text-base"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap text-sm sm:text-base"
              >
                Send {formType === 'partnership' ? 'Partnership' : 'Investment'} Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
