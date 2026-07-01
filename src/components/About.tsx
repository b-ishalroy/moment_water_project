import React from 'react';
import { Award, ShieldCheck, Heart, Sparkles, MapPin } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: ShieldCheck,
      title: 'Pure Multi-Stage Water',
      description: 'Your health is our trust. Every single drop undergoes rigorous multi-stage purification and micron filtration for crisp, clean hydration.',
      color: 'text-[#A5F3FC]',
      bg: 'bg-white/5',
      border: 'border-white/5'
    },
    {
      icon: Sparkles,
      title: 'Bespoke Label Artistry',
      description: 'Our digital artists craft gorgeous, tailor-made labels using your photos, monograms, and custom text to match your celebration motif perfectly.',
      color: 'text-[#F472B6]',
      bg: 'bg-white/5',
      border: 'border-white/5'
    },
    {
      icon: Heart,
      title: 'Tripura Pride Crafting',
      description: 'As a Tripura local brand, we handle everything locally—from premium printing to bottling, providing jobs and representing Agartala with pure trust.',
      color: 'text-[#FDE68A]',
      bg: 'bg-white/5',
      border: 'border-white/5'
    }
  ];

  return (
    <section id="about-section" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F472B6]/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Storytelling with boutique photo placeholder */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#141414] p-1">
              {/* Photo representation */}
              <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800"
                alt="Luxury wedding event with customizable bottle labels"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover rounded-[30px] opacity-75 grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Location Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0A0A0A]/90 p-4 rounded-2xl border border-white/10 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center text-[#F472B6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-[#A5F3FC] uppercase tracking-widest">PROUDLY OPERATING</h4>
                  <p className="text-sm font-serif font-semibold text-white">Agartala, Tripura, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
              <Award className="w-3.5 h-3.5" />
              OUR STORY
            </div>

            <h2 className="text-3xl md:text-5xl font-serif leading-[1.1] tracking-tight text-white mb-6">
              A Bottle Personalization <br />
              <span className="gradient-text-gold-pink font-semibold">Studio, Not A Factory</span>
            </h2>

            <div className="space-y-4 text-white/60 text-sm leading-relaxed max-w-xl mb-8">
              <p>
                Born in Agartala, <strong className="text-white font-medium">Moment Water</strong> is a local boutique brand that transforms standard, everyday water bottles into customized keepsakes for life’s most beautiful occasions. We don’t just package water; we craft memories.
              </p>
              <p>
                Whether it is your wedding, a milestone birthday bash, a premium resort greeting, a college fest, or even a hilarious prank gift, we personalize each bottle with premium photos, custom monograms, and celebratory graphics tailored to your exact theme.
              </p>
              <p>
                We operate on a simple yet profound philosophy: <strong className="text-[#F472B6] font-medium">"Pure Water. Pure Trust."</strong> We couple our premium high-resolution printing artistry with ultra-clean, healthy purified water, ensuring that every guest holds a token of pure trust.
              </p>
            </div>

            {/* Quality points grids */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {qualities.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    className={`p-5 rounded-3xl border ${item.border} ${item.bg} flex flex-col items-start text-left`}
                  >
                    <div className={`p-2 rounded-xl bg-[#0A0A0A] mb-3 ${item.color} border border-white/5`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs font-mono text-white uppercase tracking-wider mb-1.5">{item.title}</h3>
                    <p className="text-xs text-white/60 leading-normal">{item.description}</p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
