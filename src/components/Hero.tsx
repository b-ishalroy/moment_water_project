import React, { useState } from 'react';
import { ArrowDown, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useTransform, useSpring } from 'motion/react';

export default function Hero() {
  const [name, setName] = useState('Priyanshu & Riya');
  const [subtext, setSubtext] = useState('Wedding • Nov 2026');
  const [theme, setTheme] = useState<'wedding' | 'birthday' | 'fest'>('wedding');

  // Animation motion values
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 15, stiffness: 120 });

  // Map drag x-position to rotation of the bottle (creates realistic tilt)
  const bottleRotate = useTransform(springX, [-150, 150], [-35, 35]);

  // Map drag x-position to opposite rotation of the water layer so fluid stays level with the ground
  const waterRotate = useTransform(springX, [-150, 150], [35, -35]);

  // Inertial skew of the water surface during drag
  const waterSkewX = useTransform(springX, [-150, 150], [-8, 8]);

  // Soft vertical displacement of water under drag pressure
  const waterY = useTransform(springX, [-150, 150], [-4, 4]);

  const themeConfigs = {
    wedding: {
      bgGradient: 'linear-gradient(135deg, #1e1b4b 0%, #31102f 50%, #1e1b4b 100%)',
      primaryColor: '#F472B6',
      accentColor: '#FDE68A',
      badgeText: 'WEDDING KEEPSAKE',
      accentSvgType: 'ring'
    },
    birthday: {
      bgGradient: 'linear-gradient(135deg, #0f172a 0%, #0d3b4c 50%, #0f172a 100%)',
      primaryColor: '#A5F3FC',
      accentColor: '#F472B6',
      badgeText: 'BIRTHDAY BASH',
      accentSvgType: 'cake'
    },
    fest: {
      bgGradient: 'linear-gradient(135deg, #180828 0%, #2f1147 50%, #180828 100%)',
      primaryColor: '#FDE68A',
      accentColor: '#A5F3FC',
      badgeText: 'FESTIVAL SPECIAL',
      accentSvgType: 'music'
    }
  };

  const renderStickerIcon = (type: string, color: string) => {
    switch (type) {
      case 'ring':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <circle cx="12" cy="14" r="6" />
            <path d="M12 2 L15 5 L12 8 L9 5 Z" fill={color} />
          </svg>
        );
      case 'cake':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <path d="M5 16 h14 v4 H5 z" />
            <path d="M7 10 h10 v6 H7 z" />
            <path d="M12 4 v6" />
            <circle cx="12" cy="3" r="1" fill={color} />
          </svg>
        );
      case 'music':
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <path d="M9 18 V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden px-4 md:px-8">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#F472B6]/5 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#A5F3FC]/5 blur-[120px]" />
      
      {/* Subtle Vector Water Ripples Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg className="w-full h-full max-w-5xl" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="500" cy="500" r="100" stroke="rgba(165,243,252,0.3)" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="200" stroke="rgba(165,243,252,0.2)" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="300" stroke="rgba(165,243,252,0.1)" strokeWidth="0.5" />
          <circle cx="500" cy="500" r="400" stroke="rgba(244,114,182,0.05)" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* LEFT COLUMN: Highly Polished Elegant Brand Presentation */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          
          {/* Tripura Local Brand Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#A5F3FC] mb-6 tracking-widest uppercase shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A5F3FC] animate-pulse" />
            <Sparkles className="w-3.5 h-3.5 text-[#FDE68A]" />
            <span>TRIPURA LOCAL BRAND</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif leading-[1.0] mb-6 tracking-tight text-white">
            Turn Every Bottle <br />
            Into a <span className="gradient-text-gold-pink font-semibold italic">Keepsake</span>
          </h1>

          <p className="text-sm sm:text-base text-white/60 max-w-xl leading-relaxed mb-8">
            Pure Water. Pure Trust. We print high-definition customized labels with your personal photos, monograms, and luxury themes for weddings, birthdays, resorts, and fests in Tripura.
          </p>

          {/* Core USP Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 w-full max-w-md">
            {[
              'Premium Glossy Label Printing',
              'Completely Bespoke Designs & Photos',
              'Fast & Secure Delivery Across Tripura',
              'Purified Multi-Stage Premium Water',
            ].map((usp) => (
              <div key={usp} className="flex items-center gap-2.5 text-xs text-white/70 font-mono">
                <CheckCircle2 className="w-4 h-4 text-[#A5F3FC] shrink-0" />
                <span>{usp}</span>
              </div>
            ))}
          </div>

          {/* Action CTAs (Large touch targets for 99% mobile usage) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/919366081439"
              target="_blank"
              rel="noreferrer"
              className="bg-gradient-to-r from-[#FDE68A] to-[#F472B6] text-black font-bold py-4 px-8 rounded-full flex items-center justify-center gap-3 shadow-lg shadow-pink-950/20 text-xs uppercase tracking-wider transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-5 h-5 fill-black text-transparent" />
              <span>Start Designing</span>
            </a>
            
            <a
              href="#customizer-section"
              className="border border-white/20 hover:bg-white/5 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider transition-all"
            >
              <span>See Live Studio</span>
              <ArrowDown className="w-4 h-4 animate-bounce text-[#F472B6]" />
            </a>
          </div>

          {/* Instagram Handle Hook */}
          <div className="mt-8 flex items-center gap-2.5 text-xs font-mono text-white/40">
            <span>Find us on Instagram</span>
            <a 
              href="https://instagram.com/moment_water" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#F472B6] hover:underline font-bold"
            >
              @moment_water
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Luxurious Floating Keepsake Bottle Composition */}
        <div className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0">
          
          {/* Neon/Pink glow circle behind water bottle */}
          <div className="absolute w-72 h-72 rounded-full logo-ring-gradient blur-[80px] opacity-15" />
          
          {/* Main Visual Frame - Styled as a luxury bottle portrait */}
          <div className="relative w-full max-w-[280px] sm:max-w-[320px] rounded-[40px] border border-white/10 shadow-2xl bg-[#141414] p-6 flex flex-col justify-between group">
            
            {/* Gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />

            {/* Top info badge */}
            <div className="flex justify-between items-center relative z-10 mb-4">
              <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase">
                ESTD 2026 • TRIPURA
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#F472B6] bg-[#F472B6]/10 px-2.5 py-0.5 rounded-full border border-[#F472B6]/20">
                DRAG OR SWIPE BOTTLE
              </span>
            </div>

            {/* Interactive Vector Bottle */}
            <div className="my-auto flex items-center justify-center relative h-[360px] cursor-grab active:cursor-grabbing select-none overflow-visible">
              {/* Pulse Water Rings in background of the bottle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="w-64 h-64 rounded-full border border-[#A5F3FC]/15 water-pulse-1 absolute" />
                <div className="w-64 h-64 rounded-full border border-[#F472B6]/10 water-pulse-2 absolute" />
              </div>

              {/* Framer Motion interactive physical bottle */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.8}
                style={{
                  x,
                  rotate: bottleRotate,
                  originX: 0.5,
                  originY: 0.8
                }}
                className="relative z-10 w-full max-w-[190px] drop-shadow-[0_25px_45px_rgba(0,0,0,0.8)]"
              >
                <svg viewBox="0 0 300 650" className="w-full">
                  <defs>
                    {/* Glass and Cap Gradients */}
                    <linearGradient id="hero-glass-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
                      <stop offset="15%" stopColor="rgba(255,255,255,0.4)" />
                      <stop offset="30%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="70%" stopColor="rgba(255,255,255,0.1)" />
                      <stop offset="90%" stopColor="rgba(255,255,255,0.5)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
                    </linearGradient>

                    <linearGradient id="hero-cap-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor="#475569" />
                      <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>

                    <linearGradient id="hero-water-grad" x1="0%" y1="0%" x2="0%" y2="1%">
                      <stop offset="0%" stopColor="rgba(165, 243, 252, 0.45)" />
                      <stop offset="50%" stopColor="rgba(14, 165, 233, 0.3)" />
                      <stop offset="100%" stopColor="rgba(236, 72, 153, 0.2)" />
                    </linearGradient>

                    <linearGradient id="hero-label-shine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                      <stop offset="25%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="75%" stopColor="rgba(255,255,255,0)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0.25)" />
                    </linearGradient>

                    {/* Bottle Shape Clipping Path for Water */}
                    <clipPath id="hero-bottle-clip">
                      <path d="M120 84 C120 120 92 145 87 190 C82 230 82 250 82 250 L82 580 C82 605 97 615 120 615 L180 615 C203 615 218 605 218 580 L218 250 C218 250 218 230 213 190 C208 145 180 120 180 84 Z" />
                    </clipPath>
                  </defs>

                  {/* 1. Cap */}
                  <path d="M115 40 L185 40 A5 5 0 0 1 190 45 L190 75 A3 3 0 0 1 187 78 L113 78 A3 3 0 0 1 110 75 L110 45 A5 5 0 0 1 115 40 Z" fill="url(#hero-cap-grad)" />
                  <rect x="106" y="78" width="88" height="6" rx="2" fill="#0f172a" />

                  {/* 2. Glass Outline with Water Masking */}
                  <g clipPath="url(#hero-bottle-clip)">
                    {/* Background Fluid Cavity */}
                    <rect x="0" y="0" width="300" height="650" fill="rgba(165, 243, 252, 0.05)" />

                    {/* Animated, Inertial Sloshing Water Body */}
                    <motion.g
                      style={{
                        rotate: waterRotate,
                        skewX: waterSkewX,
                        y: waterY,
                        originX: '150px',
                        originY: '380px'
                      }}
                    >
                      {/* Water volume block */}
                      <rect x="-100" y="190" width="500" height="480" fill="url(#hero-water-grad)" />

                      {/* Animated wave surface inside fluid */}
                      <motion.path
                        d="M -100 190 Q 50 180 150 190 T 400 190 L 400 210 L -100 210 Z"
                        fill="rgba(165, 243, 252, 0.45)"
                        animate={{
                          d: [
                            "M -100 190 Q 50 178 150 190 T 400 190 L 400 210 L -100 210 Z",
                            "M -100 190 Q 50 202 150 190 T 400 190 L 400 210 L -100 210 Z",
                            "M -100 190 Q 50 178 150 190 T 400 190 L 400 210 L -100 210 Z"
                          ]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />

                      {/* Floating upward bubbles inside water */}
                      {[
                        { id: 1, cx: 110, cy: 300, r: 2.5, delay: 0 },
                        { id: 2, cx: 185, cy: 390, r: 2, delay: 0.9 },
                        { id: 3, cx: 135, cy: 460, r: 3.5, delay: 1.8 },
                        { id: 4, cx: 165, cy: 270, r: 1.5, delay: 2.7 },
                        { id: 5, cx: 115, cy: 520, r: 3, delay: 1.2 },
                      ].map((bubble) => (
                        <motion.circle
                          key={bubble.id}
                          cx={bubble.cx}
                          cy={bubble.cy}
                          r={bubble.r}
                          fill="rgba(255, 255, 255, 0.4)"
                          animate={{
                            y: [150, -250],
                            x: [0, Math.sin(bubble.id) * 12, 0],
                            opacity: [0, 0.7, 0]
                          }}
                          transition={{
                            duration: 5.5,
                            repeat: Infinity,
                            delay: bubble.delay,
                            ease: "linear"
                          }}
                        />
                      ))}
                    </motion.g>
                  </g>

                  {/* 3. Glass Bottle Body Shell */}
                  <path d="M120 84 C120 120 92 145 87 190 C82 230 82 250 82 250 L82 580 C82 605 97 615 120 615 L180 615 C203 615 218 605 218 580 L218 250 C218 250 218 230 213 190 C208 145 180 120 180 84 Z" fill="none" stroke="url(#hero-glass-grad)" strokeWidth="3" />

                  {/* 4. Personalized Sticker Label Component (glued to glass body, rotates with it!) */}
                  <g>
                    <foreignObject x="83.5" y="280" width="133" height="180">
                      <div 
                        className="w-full h-full p-2.5 flex flex-col justify-between text-center relative overflow-hidden transition-all duration-500 rounded-[4px]"
                        style={{
                          background: themeConfigs[theme].bgGradient,
                          borderTop: `1px solid rgba(255,255,255,0.15)`,
                          borderBottom: `1px solid rgba(255,255,255,0.15)`,
                        }}
                      >
                        {/* Label Background Subtle Sparkle Pattern */}
                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:10px_10px]" />

                        {/* Top Ribbon */}
                        <div className="relative z-10">
                          <span 
                            className="inline-block text-[5.5px] uppercase tracking-wider px-1.5 py-0.5 rounded font-mono border"
                            style={{
                              color: themeConfigs[theme].primaryColor,
                              borderColor: `${themeConfigs[theme].primaryColor}30`,
                              background: 'rgba(0,0,0,0.45)',
                            }}
                          >
                            {themeConfigs[theme].badgeText}
                          </span>
                        </div>

                        {/* Theme Accent Icon */}
                        <div className="relative z-10 flex items-center justify-center transform scale-90 -my-1">
                          {renderStickerIcon(themeConfigs[theme].accentSvgType, themeConfigs[theme].primaryColor)}
                        </div>

                        {/* Personalized Text Content */}
                        <div className="relative z-10 px-0.5">
                          <h4 
                            className="font-serif text-[10px] font-semibold leading-tight tracking-wide truncate text-white"
                            style={{ color: themeConfigs[theme].accentColor }}
                          >
                            {name || 'Custom Bottle'}
                          </h4>
                          
                          <p 
                            className="text-[6px] mt-0.5 font-sans leading-none opacity-80 uppercase tracking-widest truncate"
                            style={{ color: themeConfigs[theme].primaryColor }}
                          >
                            {subtext || 'Pure Water'}
                          </p>
                        </div>

                        {/* Standard Fine Print Footer */}
                        <div className="relative z-10 flex justify-between items-end border-t border-white/5 pt-1 mt-0.5">
                          <div className="text-[3.5px] text-white/40 font-mono text-left leading-none">
                            <div>500ML • Premium Water</div>
                            <div className="text-[3px] opacity-60">Agartala, Tripura</div>
                          </div>
                          <div 
                            className="text-[4.5px] font-mono font-bold leading-none"
                            style={{ color: themeConfigs[theme].primaryColor }}
                          >
                            MOMENT™
                          </div>
                        </div>
                      </div>
                    </foreignObject>

                    {/* Realistic 3D Cylindrical Reflection Glare */}
                    <rect x="83.5" y="280" width="133" height="180" fill="url(#hero-label-shine)" pointerEvents="none" />
                  </g>

                  {/* 5. Glass Reflection Highlights */}
                  <path d="M85 260 L85 570 C85 585 88 595 100 600" fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth="2.5" strokeLinecap="round" pointerEvents="none" />
                  <path d="M215 260 L215 570 C215 585 212 595 200 600" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeLinecap="round" pointerEvents="none" />
                  <path d="M150 250 Q145 420 150 580" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="6" strokeLinecap="round" pointerEvents="none" />
                  <path d="M90 230 C120 200 180 200 210 230" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" pointerEvents="none" />
                  <path d="M100 605 Q150 612 200 605" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeLinecap="round" pointerEvents="none" />
                </svg>
              </motion.div>

              {/* Floating aesthetic sparks */}
              <div className="absolute top-4 right-10 w-2 h-2 rounded-full bg-[#FDE68A] opacity-50 animate-ping" />
              <div className="absolute bottom-12 left-10 w-1.5 h-1.5 rounded-full bg-[#F472B6] opacity-35 animate-pulse" />
            </div>

            {/* Personalized Interactive Input Board */}
            <div className="mt-4 relative z-10 bg-[#0A0A0A]/95 backdrop-blur-md rounded-2xl p-3 border border-white/10 shadow-md space-y-2.5 text-left">
              <div className="flex justify-between items-center text-[10px] font-mono text-white/40 uppercase">
                <span>Personalize Sticker</span>
                <span className="text-[#F472B6]">Swipe / Drag Bottle</span>
              </div>
              
              {/* Theme Fast Tabs */}
              <div className="grid grid-cols-3 gap-1">
                {(['wedding', 'birthday', 'fest'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => {
                      setTheme(t);
                      if (t === 'wedding') {
                        setName('Priyanshu & Riya');
                        setSubtext('Wedding • Nov 2026');
                      } else if (t === 'birthday') {
                        setName("Joydeep's 25th");
                        setSubtext('Agartala • 04 July');
                      } else {
                        setName('Heritage Fest');
                        setSubtext('Tripura Tourism • 2026');
                      }
                    }}
                    className={`py-1 rounded text-[9px] font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                      theme === t
                        ? 'bg-white/10 border-[#F472B6]/40 text-white font-bold'
                        : 'bg-transparent border-white/5 text-white/40 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Text Fields */}
              <div className="space-y-1.5">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 24))}
                  placeholder="Custom Name..."
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-2.5 py-1.5 text-white text-[11px] focus:outline-none focus:border-[#F472B6]/50 transition-all font-serif"
                />
                <input
                  type="text"
                  value={subtext}
                  onChange={(e) => setSubtext(e.target.value.slice(0, 32))}
                  placeholder="Tagline or Date..."
                  className="w-full bg-[#141414] border border-white/10 rounded-lg px-2.5 py-1.5 text-white text-[10px] focus:outline-none focus:border-[#F472B6]/50 transition-all font-mono"
                />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

