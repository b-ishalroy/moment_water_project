import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Gift, Award, PartyPopper, Check, ShieldAlert, ArrowRight, Upload } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { LabelTemplate, Occasion } from '../types';

interface LabelCustomizerProps {
  onOrderClick: (customDetails: {
    name: string;
    subtext: string;
    category: string;
    quantity: number;
  }) => void;
  initialCategory?: string;
}

// Preset templates for our luxury bottle simulator
const PRESETS: LabelTemplate[] = [
  {
    id: 'wedding-royal',
    name: 'Royal Monogram',
    category: 'wedding',
    primaryColor: '#f59e0b', // gold
    secondaryColor: '#ec4899', // pink
    accentColor: '#ffffff',
    bgGradient: 'linear-gradient(135deg, #2a081c 0%, #1e1b4b 100%)',
    defaultText: 'Rahul & Sneha',
    defaultSubtext: 'The Sacred Knot • Dec 12, 2026',
    badgeText: 'WEDDING FOREVER',
    accentSvgType: 'floral'
  },
  {
    id: 'birthday-party',
    name: 'Neon Confetti',
    category: 'birthday',
    primaryColor: '#ec4899',
    secondaryColor: '#3b82f6',
    accentColor: '#ffffff',
    bgGradient: 'linear-gradient(135deg, #180828 0%, #030712 100%)',
    defaultText: 'Riya is 18!',
    defaultSubtext: 'Happy Birthday • July 25, 2026',
    badgeText: 'CELEBRATING RIYA',
    accentSvgType: 'balloons'
  },
  {
    id: 'resort-elite',
    name: 'Boutique Serene',
    category: 'resort',
    primaryColor: '#2dd4bf', // aqua
    secondaryColor: '#10b981', // emerald
    accentColor: '#ffffff',
    bgGradient: 'linear-gradient(135deg, #022c22 0%, #0f172a 100%)',
    defaultText: 'Tripura Heritage Resort',
    defaultSubtext: 'Bespoke Premium Springs',
    badgeText: 'CO-BRANDED RESORT',
    accentSvgType: 'minimal-geo'
  },
  {
    id: 'college-ignite',
    name: 'Campus Ignite',
    category: 'fest',
    primaryColor: '#a855f7', // purple
    secondaryColor: '#3b82f6', // blue
    accentColor: '#ffffff',
    bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #020617 100%)',
    defaultText: 'TIT IGNITE 2026',
    defaultSubtext: 'Annual Tech Fest • Agartala',
    badgeText: 'COLLEGE FEST SPECIAL',
    accentSvgType: 'stars'
  },
  {
    id: 'prank-warning',
    name: 'Humorous Warning',
    category: 'prank',
    primaryColor: '#facc15', // yellow
    secondaryColor: '#1e293b',
    accentColor: '#000000',
    bgGradient: 'linear-gradient(135deg, #450a0a 0%, #0f172a 100%)',
    defaultText: 'OLD AGE WATER',
    defaultSubtext: 'Warning: Enhances Wisdom (Over 40 Only)',
    badgeText: '100% FUN GUARANTEED',
    accentSvgType: 'prank-warning'
  }
];

export default function LabelCustomizer({ onOrderClick, initialCategory }: LabelCustomizerProps) {
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || 'wedding');
  const [selectedTemplate, setSelectedTemplate] = useState<LabelTemplate>(PRESETS[0]);
  const [customName, setCustomName] = useState<string>('');
  const [customSubtext, setCustomSubtext] = useState<string>('');
  const [qty, setQty] = useState<number>(200);
  const [copied, setCopied] = useState<boolean>(false);

  // Sync when initialCategory changes from outer props
  useEffect(() => {
    if (initialCategory) {
      setActiveCategory(initialCategory);
    }
  }, [initialCategory]);

  // Sync template fields when category changes
  useEffect(() => {
    const matched = PRESETS.find(p => p.category === activeCategory);
    if (matched) {
      setSelectedTemplate(matched);
      setCustomName(matched.defaultText);
      setCustomSubtext(matched.defaultSubtext);
    }
  }, [activeCategory]);

  const handleCustomizerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOrderClick({
      name: customName,
      subtext: customSubtext,
      category: activeCategory,
      quantity: qty
    });
  };

  // Helper to render the vector SVG badges on the water bottle label
  const renderLabelIcon = (type: string, color: string) => {
    switch (type) {
      case 'floral':
        return (
          <svg className="w-10 h-10 mx-auto my-1" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
            <path d="M50 25 C45 35, 35 45, 50 50 C65 45, 55 35, 50 25 Z" fill={color} opacity="0.8" />
            <path d="M50 75 C45 65, 35 55, 50 50 C65 55, 55 65, 50 75 Z" fill={color} opacity="0.8" />
            <path d="M25 50 C35 45, 45 35, 50 50 C45 65, 35 55, 25 50 Z" fill={color} opacity="0.8" />
            <path d="M75 50 C65 45, 55 35, 50 50 C55 65, 65 55, 75 50 Z" fill={color} opacity="0.8" />
            <circle cx="50" cy="50" r="6" fill="#000000" />
            <circle cx="50" cy="50" r="3" fill={color} />
          </svg>
        );
      case 'balloons':
        return (
          <svg className="w-10 h-10 mx-auto my-1" viewBox="0 0 100 100" fill="none">
            <circle cx="42" cy="42" r="14" fill={color} opacity="0.9" />
            <path d="M42 56 Q42 68 46 72" stroke="#fff" strokeWidth="1" />
            <circle cx="58" cy="46" r="12" fill={selectedTemplate.secondaryColor} opacity="0.8" />
            <path d="M58 58 Q58 66 54 74" stroke="#fff" strokeWidth="1" />
            <polygon points="50,75 54,77 48,79" fill={color} />
          </svg>
        );
      case 'minimal-geo':
        return (
          <svg className="w-10 h-10 mx-auto my-1" viewBox="0 0 100 100" fill="none">
            <polygon points="50,20 80,75 20,75" stroke={color} strokeWidth="2" strokeLinejoin="round" />
            <polygon points="50,38 70,70 30,70" fill={color} opacity="0.3" />
            <circle cx="50" cy="50" r="4" fill={color} />
          </svg>
        );
      case 'stars':
        return (
          <svg className="w-10 h-10 mx-auto my-1" viewBox="0 0 100 100" fill="none">
            <path d="M50 20 L54 38 L72 38 L58 48 L62 66 L50 56 L38 66 L42 48 L28 38 L46 38 Z" fill={color} />
            <circle cx="25" cy="25" r="3" fill="#fff" opacity="0.8" />
            <circle cx="75" cy="25" r="2" fill="#fff" opacity="0.9" />
            <circle cx="70" cy="70" r="3" fill={selectedTemplate.secondaryColor} />
          </svg>
        );
      case 'prank-warning':
        return (
          <svg className="w-10 h-10 mx-auto my-1" viewBox="0 0 100 100" fill="none">
            <polygon points="50,15 85,75 15,75" fill={color} />
            <polygon points="50,23 78,71 22,71" fill="#000" />
            <rect x="47" y="38" width="6" height="18" fill={color} rx="2" />
            <circle cx="50" cy="62" r="4" fill={color} />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section id="customizer-section" className="py-20 px-4 md:px-8 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(165,243,252,0.04),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            LIVE BOTTLE STUDIO
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            Visualize Your <span className="gradient-text-gold-pink font-semibold">Custom Label</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm">
            99% of our visitors view their personalized bottles live on their phones before ordering! Type your custom names below to see the magic.
          </p>
        </div>

        {/* Studio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT: Live Interactive 3D-Look Bottle SVG */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative p-6">
            
            {/* Soft Ambient Light Glow Behind Bottle */}
            <div 
              className="absolute w-64 h-[450px] rounded-full blur-[100px] opacity-25 transition-all duration-700"
              style={{
                background: `radial-gradient(circle, ${selectedTemplate.primaryColor} 0%, ${selectedTemplate.secondaryColor} 100%)`
              }}
            />

            {/* Ripple Water Rings in background of the bottle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-80 h-80 rounded-full border border-[#A5F3FC]/10 water-pulse-1 absolute" />
              <div className="w-80 h-80 rounded-full border border-[#F472B6]/5 water-pulse-2 absolute" />
            </div>

            {/* Interactive Bottle Vector */}
            <div className="relative z-10 w-full max-w-[280px] animate-float">
              <svg viewBox="0 0 300 650" className="w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.6)]">
                <defs>
                  {/* Glass Shading Gradients */}
                  <linearGradient id="glass-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                    <stop offset="15%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="70%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="90%" stopColor="rgba(255,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                  </linearGradient>

                  <linearGradient id="cap-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#475569" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>

                  <linearGradient id="water-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(14,165,233,0.08)" />
                    <stop offset="50%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="100%" stopColor="rgba(56,189,248,0.12)" />
                  </linearGradient>

                  <linearGradient id="label-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                    <stop offset="25%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="75%" stopColor="rgba(255,255,255,0)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
                  </linearGradient>
                </defs>

                {/* 1. Cap (Premium Black/Slate Ribbed Cap) */}
                <path d="M115 40 L185 40 A5 5 0 0 1 190 45 L190 75 A3 3 0 0 1 187 78 L113 78 A3 3 0 0 1 110 75 L110 45 A5 5 0 0 1 115 40 Z" fill="url(#cap-grad)" />
                {/* Cap Ribbing */}
                <line x1="120" y1="45" x2="120" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="130" y1="45" x2="130" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="140" y1="45" x2="140" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="150" y1="45" x2="150" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="160" y1="45" x2="160" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="170" y1="45" x2="170" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                <line x1="180" y1="45" x2="180" y2="73" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                
                {/* Cap Base Ring */}
                <rect x="106" y="78" width="88" height="6" rx="2" fill="#0f172a" />

                {/* 2. Bottle Neck Glass */}
                <path d="M120 84 C120 120 90 145 85 190 C80 230 80 250 80 250 L220 250 C220 250 220 230 215 190 C210 145 180 120 180 84 Z" fill="url(#water-grad)" />
                <path d="M120 84 C120 120 90 145 85 190 C80 230 80 250 80 250 L220 250 C220 250 220 230 215 190 C210 145 180 120 180 84 Z" fill="none" stroke="url(#glass-grad)" strokeWidth="2.5" />

                {/* 3. Water Level Wave */}
                <path d="M84 195 Q150 188 216 195 C216 195 215 190 215 190 C210 145 180 120 180 84 L120 84 C120 120 90 145 85 190 Z" fill="rgba(255,255,255,0.03)" />
                
                {/* 4. Bottle Body Main */}
                <path d="M80 250 L80 580 C80 605 95 615 120 615 L180 615 C205 615 220 605 220 580 L220 250 Z" fill="url(#water-grad)" />
                <path d="M80 250 L80 580 C80 605 95 615 120 615 L180 615 C205 615 220 605 220 580 L220 250 Z" fill="none" stroke="url(#glass-grad)" strokeWidth="2.5" />

                {/* 5. Custom Label Component Wrapper (Y=280 to Y=460) */}
                <g>
                  {/* Background of customized label */}
                  <rect x="81" y="280" width="138" height="180" rx="3" fill="url(#label-glow)" style={{ fill: 'none' }} />
                  
                  {/* ForeignObject allows direct HTML, CSS and gradients inside SVG! perfect for smooth layouts */}
                  <foreignObject x="81.5" y="280" width="137" height="180">
                    <div 
                      className="w-full h-full p-2.5 flex flex-col justify-between text-center relative overflow-hidden transition-all duration-500"
                      style={{
                        background: selectedTemplate.bgGradient,
                        borderTop: `1px solid rgba(255,255,255,0.15)`,
                        borderBottom: `1px solid rgba(255,255,255,0.15)`,
                      }}
                    >
                      {/* Label Background Subtle Pattern */}
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />

                      {/* Header Badge */}
                      <div className="relative z-10">
                        <span 
                          className="inline-block text-[6.5px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono border"
                          style={{
                            color: selectedTemplate.primaryColor,
                            borderColor: `${selectedTemplate.primaryColor}35`,
                            background: 'rgba(0,0,0,0.4)',
                          }}
                        >
                          {selectedTemplate.badgeText || 'MOMENT WATER'}
                        </span>
                      </div>

                      {/* Customized Vector Logo/Icon */}
                      <div className="relative z-10 flex items-center justify-center transform scale-90 -my-1">
                        {renderLabelIcon(selectedTemplate.accentSvgType, selectedTemplate.primaryColor)}
                      </div>

                      {/* Dynamic Custom Names */}
                      <div className="relative z-10 px-0.5">
                        <h4 
                          className="font-serif text-[11px] font-semibold leading-tight tracking-wide truncate"
                          style={{ color: selectedTemplate.accentColor }}
                        >
                          {customName || selectedTemplate.defaultText}
                        </h4>
                        
                        <p 
                          className="text-[6.5px] mt-0.5 font-sans leading-none opacity-80 uppercase tracking-widest truncate"
                          style={{ color: selectedTemplate.primaryColor }}
                        >
                          {customSubtext || selectedTemplate.defaultSubtext}
                        </p>
                      </div>

                      {/* Standard Fine Print Footer on Label */}
                      <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-1 mt-0.5">
                        <div className="text-[4.5px] text-slate-400 font-mono text-left leading-none">
                          <div>500ML • Packaged Water</div>
                          <div className="text-[3.5px] opacity-60">Pure Trust. Pure Water</div>
                        </div>
                        <div 
                          className="text-[5px] font-mono font-bold leading-none"
                          style={{ color: selectedTemplate.primaryColor }}
                        >
                          MW™
                        </div>
                      </div>
                    </div>
                  </foreignObject>

                  {/* 3D Curved Cylindrical Gloss Overlay for Realistic Look */}
                  <rect x="81.5" y="280" width="137" height="180" fill="url(#label-shine)" pointerEvents="none" />
                </g>

                {/* 6. Bottle Reflection Highlights */}
                {/* Long vertical edge reflections */}
                <path d="M85 260 L85 570 C85 585 88 595 100 600" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeLinecap="round" pointerEvents="none" />
                <path d="M215 260 L215 570 C215 585 212 595 200 600" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeLinecap="round" pointerEvents="none" />
                
                {/* Center glossy highlight */}
                <path d="M150 250 Q145 420 150 580" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" strokeLinecap="round" pointerEvents="none" />
                
                {/* Shoulder and Bottom Highlights */}
                <path d="M90 230 C120 200 180 200 210 230" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" pointerEvents="none" />
                <path d="M100 605 Q150 612 200 605" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" pointerEvents="none" />
              </svg>
            </div>
            
            {/* Visual Indicator of personalization output */}
            <div className="mt-4 text-center">
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/40 flex items-center gap-1.5 justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                3D-Cylinder Product Rendering Engine
              </span>
            </div>
          </div>

          {/* RIGHT: Studio Control Console */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-3xl border-white/10 shadow-2xl relative">
              
              {/* Category tabs */}
              <div className="mb-8">
                <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-3">
                  1. Choose Celebration Type
                </label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {[
                    { id: 'wedding', label: 'Weddings', icon: Gift },
                    { id: 'birthday', label: 'Birthdays', icon: PartyPopper },
                    { id: 'resort', label: 'Resorts & Hotels', icon: Award },
                    { id: 'fest', label: 'Fests & Events', icon: Calendar },
                    { id: 'prank', label: 'Prank Bottles', icon: ShieldAlert },
                  ].map((cat) => {
                    const IconComp = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategory(cat.id)}
                        className={`flex flex-col items-center justify-center py-2 px-1 rounded-xl text-xs font-medium transition-all duration-300 border ${
                          activeCategory === cat.id
                            ? 'bg-gradient-to-br from-[#F472B6]/20 to-[#FDE68A]/10 border-[#F472B6]/50 text-white'
                            : 'bg-[#0A0A0A] border-white/5 text-white/40 hover:text-white hover:border-white/10'
                        }`}
                      >
                        <IconComp className={`w-4 h-4 mb-1 ${activeCategory === cat.id ? 'text-[#F472B6]' : 'text-white/30'}`} />
                        <span className="text-[10px] leading-tight text-center truncate w-full">{cat.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Input Form */}
              <form onSubmit={handleCustomizerSubmit} className="space-y-5">
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    2. Customized Brand / Guest of Honor Name
                  </label>
                  <input
                    type="text"
                    maxLength={32}
                    value={customName}
                    onChange={(e) => setCustomName(e.target.value)}
                    placeholder="Enter names or event title..."
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all font-serif"
                  />
                  <div className="flex justify-between items-center mt-1 text-[11px] text-white/40 font-mono">
                    <span>E.g., {selectedTemplate.defaultText}</span>
                    <span>{customName.length}/32 chars</span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    3. Date, Greeting or Event Subtitle
                  </label>
                  <input
                    type="text"
                    maxLength={45}
                    value={customSubtext}
                    onChange={(e) => setCustomSubtext(e.target.value)}
                    placeholder="Enter date, venue, or tagline..."
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all"
                  />
                  <div className="flex justify-between items-center mt-1 text-[11px] text-white/40 font-mono">
                    <span>E.g., {selectedTemplate.defaultSubtext}</span>
                    <span>{customSubtext.length}/45 chars</span>
                  </div>
                </div>

                {/* Quantity slider (High interactive on mobile!) */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      4. Approximate Quantity
                    </label>
                    <span className="text-xs font-mono text-[#F472B6] bg-[#F472B6]/10 px-2.5 py-0.5 rounded-full border border-[#F472B6]/20">
                      {qty} Bottles
                    </span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={2000}
                    step={50}
                    value={qty}
                    onChange={(e) => setQty(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#F472B6]"
                  />
                  <div className="flex justify-between text-[10px] text-white/40 font-mono mt-1">
                    <span>Min: 50 bottles</span>
                    <span>Eco Scale</span>
                    <span>Max: 2000+</span>
                  </div>
                </div>

                {/* Preset Fast Template Buttons */}
                <div className="bg-[#0A0A0A] rounded-2xl p-4 border border-white/5">
                  <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    Design Palette Theme Settings
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {PRESETS.filter(p => p.category === activeCategory).map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => {
                          setSelectedTemplate(preset);
                          setCustomName(preset.defaultText);
                          setCustomSubtext(preset.defaultSubtext);
                        }}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          selectedTemplate.id === preset.id
                            ? 'bg-white/10 border-[#F472B6]/30 text-white'
                            : 'bg-transparent border-white/5 text-white/50 hover:text-white'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-white/10" 
                          style={{ background: `linear-gradient(135deg, ${preset.primaryColor}, ${preset.secondaryColor})` }} 
                        />
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit Action Buttons */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#FDE68A] to-[#F472B6] text-black font-bold py-3.5 px-6 rounded-full text-xs uppercase tracking-wider shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Proceed With This Design</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="bg-[#0A0A0A] hover:bg-white/5 text-white border border-white/15 py-3.5 px-6 rounded-full text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400">Layout Configurations Saved!</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                        <span>Lock Design Config</span>
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Trust Tagline */}
              <div className="mt-6 flex items-center gap-2 text-xs text-white/40 font-mono justify-center border-t border-white/5 pt-4">
                <span>⚡ Premium High-Resolution Printing</span>
                <span>•</span>
                <span>💧 Multiple Filtration Water</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
