import React, { useState } from 'react';
import { Sparkles, Eye, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GalleryItem {
  id: string;
  category: 'wedding' | 'birthday' | 'resort' | 'prank';
  title: string;
  subtitle: string;
  image: string;
  description: string;
  likes: number;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-wedding-1',
    category: 'wedding',
    title: 'Ananya & Rohit Keepsake',
    subtitle: 'Royal Floral Edition',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    description: 'Gold-foiled elegant script monogram labels tailored for a grand destination wedding in Agartala, Tripura.',
    likes: 142
  },
  {
    id: 'g-birthday-1',
    category: 'birthday',
    title: 'Aarav’s First Safari Bash',
    subtitle: 'Birthday Special',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&q=80&w=800',
    description: 'High-definition printed cartoon safari label featuring the child’s photo as a beautiful return-gift keepsake.',
    likes: 98
  },
  {
    id: 'g-resort-1',
    category: 'resort',
    title: 'Dumboor Eco Sanctuary',
    subtitle: 'Resort Partnership',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800',
    description: 'Clean emerald-teal customized labels representing co-branded premium mineral water for elite guest lodging.',
    likes: 121
  },
  {
    id: 'g-prank-1',
    category: 'prank',
    title: 'The Over-The-Hill Potion',
    subtitle: 'Comedic Prank Label',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    description: 'A hilarious customized prank label "Warning: Accelerated Wisdom Drops" made for an office colleague’s 40th birthday.',
    likes: 85
  },
  {
    id: 'g-wedding-2',
    category: 'wedding',
    title: 'Preeti & Sumeet Anniversary',
    subtitle: 'Silver Jubilee Keepsake',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=600',
    description: 'Chic elegant silver-dust monogram labels reflecting twenty-five years of pure trust and beautiful companion love.',
    likes: 167
  },
  {
    id: 'g-resort-2',
    category: 'resort',
    title: 'Tripura Heritage Suites',
    subtitle: 'Boutique Hospitality Label',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800',
    description: 'Pure sky-blue labels carrying local Tripura handloom patterns, designed to make tourists feel at home.',
    likes: 112
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'wedding' | 'birthday' | 'resort' | 'prank'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'birthday', label: 'Birthdays' },
    { key: 'resort', label: 'Resorts & Brands' },
    { key: 'prank', label: 'Fun Labels' }
  ] as const;

  const filteredItems = GALLERY_ITEMS.filter(item => 
    activeFilter === 'all' ? true : item.category === activeFilter
  );

  return (
    <section id="gallery-section" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#A5F3FC]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            SHOWCASE STUDIO
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            Our Custom <span className="gradient-text-gold-pink font-semibold">Creations</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm">
            Take a look at real-style examples of personalized keepsake bottles crafted for families, luxury hotels, and local brands across Tripura.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map(filter => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-gradient-to-r from-[#FDE68A] to-[#F472B6] text-black font-semibold shadow-md'
                  : 'bg-[#141414] border border-white/5 text-white/40 hover:text-white hover:border-white/10 cursor-pointer'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-lg bg-[#141414] flex items-center justify-center cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                {/* Background image representing the bottle/aesthetic */}
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-40 transition-all duration-500"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Info Text Overlay (Static at bottom on mobile, animates on desktop) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 flex flex-col items-start text-left">
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#F472B6] mb-1.5 bg-[#F472B6]/10 px-2.5 py-0.5 rounded-full border border-[#F472B6]/20">
                    {item.subtitle}
                  </span>
                  <h3 className="text-base font-serif font-semibold text-white tracking-wide group-hover:text-[#F472B6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/60 mt-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                    {item.description}
                  </p>
                </div>

                {/* Interactive Action Icon (only visible on hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#0A0A0A]/40 backdrop-blur-[2px]">
                  <div className="w-12 h-12 rounded-full bg-[#A5F3FC] text-black flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal (For interactive zoom, critical for mobile details) */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0A0A0A]/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#141414] border border-white/10 max-w-lg w-full rounded-[32px] overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 rounded-xl bg-[#0A0A0A]/80 text-white/60 border border-white/10 hover:text-white cursor-pointer z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Image panel */}
                <div className="aspect-[16/10] relative">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent opacity-60" />
                  
                  {/* Category Stamp */}
                  <span className="absolute bottom-4 left-4 text-[9px] font-mono uppercase tracking-widest text-[#FDE68A] bg-black/80 px-3 py-1 rounded-full border border-[#FDE68A]/20">
                    {selectedItem.subtitle}
                  </span>
                </div>

                {/* Description details */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-serif font-semibold text-white mb-2">
                    {selectedItem.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">
                    {selectedItem.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a
                      href={`https://wa.me/917003222633?text=Hi%20Moment%20Water!%20I%20am%20interested%20in%20creating%20bottles%20styled%20like%20your%20project%20"${encodeURIComponent(selectedItem.title)}"%20for%20my%20upcoming%20event.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full bg-[#141414] hover:bg-white/5 border border-white/10 text-white py-3.5 rounded-full flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-semibold cursor-pointer text-center"
                    >
                      <MessageCircle className="w-4.5 h-4.5 fill-white text-transparent" />
                      <span>Inquire About This Design style on WhatsApp</span>
                    </a>
                    
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="w-full bg-[#0A0A0A] hover:bg-white/5 border border-white/10 text-white/70 py-3.5 rounded-full text-xs uppercase tracking-wider cursor-pointer"
                    >
                      Keep Browsing
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
