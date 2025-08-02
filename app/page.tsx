
'use client';

import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import AboutSection from '@/components/AboutSection';
import BrandSection from '@/components/BrandSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <AboutSection />
      <BrandSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
