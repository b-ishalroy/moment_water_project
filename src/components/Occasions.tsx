import React from 'react';
import { Gift, PartyPopper, Briefcase, Hotel, GraduationCap, Map, ShieldAlert, Sparkles, ArrowUpRight } from 'lucide-react';
import { Occasion } from '../types';

interface OccasionsProps {
  onSelectOccasion: (category: 'wedding' | 'birthday' | 'resort' | 'fest' | 'prank') => void;
}

const OCCASIONS_DATA: Occasion[] = [
  {
    id: 'wedding',
    title: 'Weddings & Engagements',
    description: 'Transform your tables with royal pink-gold calligraphy labels carrying couple photos, monograms, and wedding dates.',
    icon: 'gift',
    badge: 'Elegant Calligraphy',
    category: 'wedding',
    exampleText: 'Rahul & Sneha',
    exampleSubtext: 'Dec 12, 2026 • Sacred Union'
  },
  {
    id: 'birthday',
    title: 'Birthdays & Milestones',
    description: 'Celebrate with fun, vibrant photo labels and neon confetti graphics. Perfect return gifts for kids and grand 18th/50th milestones.',
    icon: 'party',
    badge: 'Custom Photos Included',
    category: 'birthday',
    exampleText: 'Riya is 18!',
    exampleSubtext: 'Happy Birthday • July 25, 2026'
  },
  {
    id: 'resort',
    title: 'Resorts & Premium Hotels',
    description: 'Provide an elite brand experience. Customize bottles with your premium logo and serene, clean color aesthetics for luxury guest suites.',
    icon: 'hotel',
    badge: 'Elite Co-Branding',
    category: 'resort',
    exampleText: 'Tripura Heritage Resort',
    exampleSubtext: 'Bespoke Premium Springs'
  },
  {
    id: 'fest',
    title: 'College Fests & Galas',
    description: 'Fuel high-energy crowds. Get custom electric-themed labels featuring college logos, fest dates, and event hashtags.',
    icon: 'grad',
    badge: 'High Energy Designs',
    category: 'fest',
    exampleText: 'TIT IGNITE 2026',
    exampleSubtext: 'Annual Tech Fest • Agartala'
  },
  {
    id: 'prank',
    title: 'Fun & Prank Bottles',
    description: 'Craft humorous keepsakes! Design custom bottles with funny quotes, comedic hazard warnings, or humorous "aging potion" tags.',
    icon: 'prank',
    badge: 'Comedic Keepsakes',
    category: 'prank',
    exampleText: 'OLD AGE WATER',
    exampleSubtext: 'Warning: Enhances Wisdom (Over 40 Only)'
  }
];

export default function Occasions({ onSelectOccasion }: OccasionsProps) {
  
  // Helper to map icon string to actual Lucide Icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'gift': return Gift;
      case 'party': return PartyPopper;
      case 'hotel': return Hotel;
      case 'grad': return GraduationCap;
      case 'prank': return ShieldAlert;
      default: return Sparkles;
    }
  };

  const handleCardClick = (category: 'wedding' | 'birthday' | 'resort' | 'fest' | 'prank') => {
    onSelectOccasion(category);
    
    // Smooth scroll up to customizer section
    const customizerEl = document.getElementById('customizer-section');
    if (customizerEl) {
      customizerEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="occasions-section" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(165,243,252,0.03),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            WHAT WE CUSTOMIZE
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            Occasions <span className="gradient-text-gold-pink font-semibold">We Cover</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm">
            We transform ordinary water bottles into bespoke tokens of celebration. Click any card to load its layout instantly in the Live Studio below!
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {OCCASIONS_DATA.map((item) => {
            const IconComponent = getIcon(item.icon);
            return (
              <div
                key={item.id}
                onClick={() => handleCardClick(item.category)}
                className="group glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Background glowing touch */}
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br from-[#F472B6]/10 to-[#A5F3FC]/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  {/* Icon & Badge row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-[#F472B6] group-hover:text-white group-hover:logo-ring-gradient transition-all duration-300 shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-widest text-white/40 uppercase font-semibold">
                      {item.badge}
                    </span>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-lg font-serif font-semibold text-white mb-2.5 flex items-center gap-1.5 group-hover:text-[#F472B6] transition-colors">
                    {item.title}
                    <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#F472B6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Live Sandbox Quick Load Link */}
                <div className="border-t border-white/5 pt-4 mt-2 flex items-center justify-between text-[11px] font-mono text-white/40 group-hover:text-white/60 transition-colors">
                  <span>SAMPLE OUTLINE:</span>
                  <span className="text-[#F472B6] group-hover:text-[#A5F3FC] group-hover:underline">Load Studio Preset &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Tagline */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-white/40">
            * Have a completely unique theme? No problem! Our digital artist designs from scratch for every bulk order.
          </p>
        </div>
      </div>
    </section>
  );
}
