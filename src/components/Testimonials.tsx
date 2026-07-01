import React from 'react';
import { Heart, Sparkles, MessageSquare, Instagram, CheckCircle } from 'lucide-react';
import { Testimonial } from '../types';

const REVIEWS: Testimonial[] = [
  {
    id: 't-1',
    username: 'priya_debbarma_agt',
    timeAgo: '2h',
    avatarSeed: 'priya',
    message: 'OMG the water bottles were the absolute star of the wedding table! Everyone was taking photos of the personalized label instead of drinking! 😂 Thank you so much for the quick delivery and beautiful floral design! ❤️',
    verifiedPurchase: true,
    rating: 5
  },
  {
    id: 't-2',
    username: 'rahul_sen_99',
    timeAgo: '1d',
    avatarSeed: 'rahul',
    message: 'Ordered 200 bottles for my daughter’s 1st birthday party. The printed safari photo label quality is extremely sharp. Super happy with the clean taste of the water too. 10/10 highly recommended local brand in Tripura!',
    verifiedPurchase: true,
    rating: 5
  },
  {
    id: 't-3',
    username: 'dumboor_lake_suites',
    timeAgo: '3d',
    avatarSeed: 'resort',
    message: 'Co-branded bottles look highly premium. Our resort guests love finding personalized luxury bottles by their beds. The green-teal pattern perfectly matches our natural Tripura hills theme. Outstanding service!',
    verifiedPurchase: true,
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F472B6]/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
            <Instagram className="w-3.5 h-3.5 text-[#F472B6]" />
            LOVE FROM OUR CLIENTS
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            Tripura’s <span className="gradient-text-gold-pink font-semibold">Favorites</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm">
            We operate primarily through Instagram DM and WhatsApp. Here are genuine messages from families and brands who chose Moment Water.
          </p>
        </div>

        {/* DM Chat Bubbles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div 
              key={review.id}
              className="glass-card rounded-[28px] border-white/10 p-5 flex flex-col justify-between shadow-2xl relative overflow-hidden"
            >
              {/* Instagram Active Story Ring around avatar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4.5 mb-4.5">
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-full p-[1.5px] logo-ring-gradient">
                    <div className="w-full h-full rounded-full bg-[#0A0A0A] flex items-center justify-center overflow-hidden">
                      <img 
                        src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${review.avatarSeed}`} 
                        alt={review.username}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Active Chat indicator dot */}
                    <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-[2px] border-[#141414]" />
                  </div>

                  <div className="text-left">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-semibold text-white font-mono hover:text-[#F472B6] transition-colors">
                        @{review.username}
                      </span>
                      <CheckCircle className="w-3.5 h-3.5 text-sky-400 fill-sky-400/10 shrink-0" />
                    </div>
                    <span className="text-[10px] text-white/40 font-mono">Tripura Client • {review.timeAgo}</span>
                  </div>
                </div>

                {/* Info Option Dropdown mock */}
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-white/30" />
                </div>
              </div>

              {/* Chat Content Body */}
              <div className="flex-1 text-left flex flex-col justify-between mb-4">
                {/* DM Message Bubble */}
                <div className="bg-[#0A0A0A]/90 rounded-2xl p-4 border border-white/10 relative">
                  {/* Speech arrow indicator */}
                  <div className="absolute top-4 -left-1 w-2.5 h-2.5 bg-[#0A0A0A] border-l border-t border-white/10 rotate-45" />
                  <p className="text-xs text-white/80 leading-relaxed italic relative z-10">
                    "{review.message}"
                  </p>
                </div>
              </div>

              {/* Double Tap Heart & Verified Tag */}
              <div className="flex items-center justify-between border-t border-white/5 pt-3.5 text-[10px] font-mono text-white/40">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F472B6]" />
                  Verified DM Conversation
                </span>
                
                {/* Interactive Heart React */}
                <div className="flex items-center gap-1 text-[#F472B6] bg-[#F472B6]/10 px-2.5 py-0.5 rounded-full border border-[#F472B6]/20">
                  <Heart className="w-3 h-3 fill-[#F472B6] text-transparent animate-pulse" />
                  <span>Double Tapped</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Social CTA Hook */}
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <span className="text-xs text-white/60 font-mono">Want to see more client photos?</span>
          <a 
            href="https://instagram.com/moment_water" 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-mono font-bold text-[#F472B6] hover:underline flex items-center gap-1"
          >
            Check our Stories Highlight @moment_water &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
