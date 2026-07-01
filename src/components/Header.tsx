import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Instagram, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about-section' },
    { name: 'Occasions', href: '#occasions-section' },
    { name: 'Live Studio', href: '#customizer-section' },
    { name: 'Our Work', href: '#gallery-section' },
    { name: 'How It Works', href: '#how-it-works-section' },
    { name: 'Enquire', href: '#enquiry-section' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0A]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between">
          
          {/* Elegant Script MW monogram Logo inside Black circle with pink-gold ring */}
          <a href="#" className="flex items-center gap-3.5 group select-none">
            <div className="relative w-11 h-11 rounded-full p-[1.5px] logo-ring-gradient group-hover:scale-105 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                {/* Custom elegant script MW monogram */}
                <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M25 65 C 28 35, 32 30, 36 45 C 38 52, 42 62, 45 42 C 48 30, 52 35, 56 55 C 58 65, 62 65, 68 45" 
                    stroke="url(#logo-grad)" 
                    strokeWidth="5.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  {/* Small decorative spark/droplet in gold */}
                  <circle cx="74" cy="40" r="3.5" fill="#FDE68A" />
                  <defs>
                    <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FDE68A" />
                      <stop offset="100%" stopColor="#F472B6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-white group-hover:text-[#F472B6] transition-colors uppercase">
                Moment Water
              </span>
              <span className="text-[9px] uppercase font-mono tracking-[0.2em] text-[#A5F3FC] leading-none">
                Tripura Local Brand
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-widest text-white/60 hover:text-white hover:underline hover:underline-offset-4 decoration-[#A5F3FC] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://instagram.com/moment_water"
              target="_blank"
              rel="noreferrer"
              className="text-white/60 hover:text-[#F472B6] transition-colors"
              title="Instagram @moment_water"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/917003222633"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#FDE68A] to-[#F472B6] text-black font-bold text-[11px] uppercase tracking-wider px-5 py-2.5 rounded-full flex items-center gap-2 hover:opacity-90 shadow-md transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>Order Now</span>
            </a>
          </div>

          {/* Mobile Hamburguer */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl glass-card border-white/10 text-white hover:text-[#A5F3FC] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#0A0A0A]/98 z-30 md:hidden flex flex-col justify-between pt-24 pb-8 px-6"
          >
            {/* Background Ambient Droplets */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(165,243,252,0.04),transparent_60%)] pointer-events-none" />
            
            {/* Nav List */}
            <div className="space-y-6 relative z-10 flex flex-col items-center pt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg uppercase tracking-widest font-serif text-white/80 hover:text-[#A5F3FC] block"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Footer CTAs */}
            <div className="relative z-10 space-y-4">
              <a
                href="https://wa.me/917003222633"
                target="_blank"
                rel="noreferrer"
                className="w-full bg-[#141414] hover:bg-white/5 border border-white/10 text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Chat on WhatsApp (+91 70032 22633)</span>
              </a>

              <a
                href="https://instagram.com/moment_water"
                target="_blank"
                rel="noreferrer"
                className="w-full glass-card border-white/10 text-white font-medium py-3.5 px-6 rounded-full flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider text-center"
              >
                <Instagram className="w-5 h-5 text-[#F472B6]" />
                <span>Follow Instagram @moment_water</span>
              </a>

              <div className="text-center pt-4">
                <span className="text-[10px] font-mono tracking-widest text-slate-600 uppercase">
                  ⭐ Tripura Local Brand • Pure Trust ⭐
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
