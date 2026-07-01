import React from 'react';
import { Instagram, MessageCircle, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/10 py-16 px-4 md:px-8 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-[-10%] left-[50%] -translate-x-[50%] w-[400px] h-[200px] bg-[#F472B6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Logo & Tagline */}
        <div className="flex flex-col items-center gap-4 mb-8">
          
          {/* Logo element identical to header */}
          <div className="relative w-12 h-12 rounded-full p-[1.5px] logo-ring-gradient">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <svg className="w-8 h-8" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M25 65 C 28 35, 32 30, 36 45 C 38 52, 42 62, 45 42 C 48 30, 52 35, 56 55 C 58 65, 62 65, 68 45" 
                  stroke="url(#footer-logo-grad)" 
                  strokeWidth="5.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
                <circle cx="74" cy="40" r="3.5" fill="#FDE68A" />
                <defs>
                  <linearGradient id="footer-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F472B6" />
                    <stop offset="100%" stopColor="#FDE68A" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-serif text-xl font-bold tracking-tight text-white">
              Moment Water
            </h3>
            <p className="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-1.5 flex items-center gap-1.5">
              <span>Pure Water</span>
              <span>•</span>
              <span>Pure Trust</span>
            </p>
          </div>

        </div>

        {/* Quick Social Buttons */}
        <div className="flex items-center gap-4 mb-8">
          
          <a
            href="https://instagram.com/moment_water"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 hover:border-[#F472B6]/40 text-white/60 hover:text-[#F472B6] flex items-center justify-center shadow-inner transition-all hover:scale-105 cursor-pointer"
            title="Follow our portfolio on Instagram"
          >
            <Instagram className="w-4.5 h-4.5" />
          </a>

          <a
            href="https://wa.me/919366081439"
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 rounded-full bg-[#141414] border border-white/10 hover:border-[#A5F3FC]/40 text-white/60 hover:text-[#A5F3FC] flex items-center justify-center shadow-inner transition-all hover:scale-105 cursor-pointer"
            title="Chat directly on WhatsApp"
          >
            <MessageCircle className="w-4.5 h-4.5 fill-current text-transparent hover:fill-[#A5F3FC]/10" />
          </a>

        </div>

        {/* Tripura Pride and Copyright Details */}
        <div className="space-y-3 relative z-10 border-t border-white/5 pt-8 w-full max-w-lg">
          
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-white/60">
            <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>Tripura Local Brand</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Crafted with <Heart className="w-3 h-3 fill-[#F472B6] text-transparent animate-pulse" /> in Agartala
            </span>
          </div>

          <p className="text-[10px] text-white/30 font-mono leading-relaxed">
            &copy; {year} Moment Water Studio. All rights reserved. <br />
            Personalized water bottle label mockups are for celebratory visualization. Multi-stage filtration ensures premium bottled water taste and quality under standard hygiene norms.
          </p>

        </div>

      </div>
    </footer>
  );
}
