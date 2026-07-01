/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Occasions from './components/Occasions';
import LabelCustomizer from './components/LabelCustomizer';
import Gallery from './components/Gallery';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  // Store customized data from the live customizer to inject into the enquiry sheet
  const [selectedCustomizerData, setSelectedCustomizerData] = useState<{
    name: string;
    subtext: string;
    category: string;
    quantity: number;
  } | null>(null);

  // Store clicked occasion to load corresponding layout into live customizer
  const [selectedOccasionCategory, setSelectedOccasionCategory] = useState<'wedding' | 'birthday' | 'resort' | 'fest' | 'prank' | undefined>(undefined);

  const handleSelectOccasion = (category: 'wedding' | 'birthday' | 'resort' | 'fest' | 'prank') => {
    setSelectedOccasionCategory(category);
  };

  const handleOrderClick = (data: {
    name: string;
    subtext: string;
    category: string;
    quantity: number;
  }) => {
    setSelectedCustomizerData(data);
  };

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-pink-500/30 selection:text-white antialiased overflow-x-hidden">
      {/* 1. Glass-morphic Sticky Navigation */}
      <Header />

      {/* 2. Premium Hero Splash Section */}
      <Hero />

      {/* 3. About the Brand Narrative & Badges */}
      <About />

      {/* 4. Occasions Grid & Integration */}
      <Occasions onSelectOccasion={handleSelectOccasion} />

      {/* 5. Live Interactive 3D Bottle customization sandbox */}
      <LabelCustomizer 
        onOrderClick={handleOrderClick} 
        initialCategory={selectedOccasionCategory}
      />

      {/* 6. Filterable Portfolio Work Showcase */}
      <Gallery />

      {/* 7. Easy Steps Timeline */}
      <HowItWorks />

      {/* 8. Instagram-Replica DM Reviews */}
      <Testimonials />

      {/* 9. Direct Enquiry Form with custom WhatsApp pre-fills */}
      <ContactForm customizerData={selectedCustomizerData} />

      {/* 10. Polished Branding Ending footer */}
      <Footer />
    </div>
  );
}
