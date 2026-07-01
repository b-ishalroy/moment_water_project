import React from 'react';
import { Send, Edit, Printer, Truck, Sparkles } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: Send,
      title: 'Share Details',
      desc: 'Send us your favorite family photo, company logo, monogram initials, name, and specific celebration theme.',
      color: 'text-[#F472B6]',
      bg: 'bg-[#F472B6]/5',
      border: 'border-[#F472B6]/10'
    },
    {
      num: '02',
      icon: Edit,
      title: 'Design Preview',
      desc: 'Our digital designers craft custom concepts matching your theme and send you a high-fidelity digital mock for approval.',
      color: 'text-[#FDE68A]',
      bg: 'bg-[#FDE68A]/5',
      border: 'border-[#FDE68A]/10'
    },
    {
      num: '03',
      icon: Printer,
      title: 'Print & Bottling',
      desc: 'Once you approve, we print in sharp high-resolution and bottle them filled with premium, multi-stage purified water.',
      color: 'text-[#A5F3FC]',
      bg: 'bg-[#A5F3FC]/5',
      border: 'border-[#A5F3FC]/10'
    },
    {
      num: '04',
      icon: Truck,
      title: 'On-Time Delivery',
      desc: 'We pack your personalized bottles carefully and deliver them straight to your event venue across Tripura, on time!',
      color: 'text-[#F472B6]',
      bg: 'bg-[#F472B6]/5',
      border: 'border-[#F472B6]/10'
    }
  ];

  return (
    <section id="how-it-works-section" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(165,243,252,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            4 EASY STEPS
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white">
            How It <span className="gradient-text-gold-pink font-semibold">Works</span>
          </h2>
          <p className="mt-4 text-white/60 max-w-xl mx-auto text-xs sm:text-sm">
            Ordering personalized water bottles for your celebration is incredibly simple. We handle the entire design, print, and delivery.
          </p>
        </div>

        {/* Steps Grid / Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[28%] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-[#F472B6]/20 via-[#FDE68A]/20 to-[#A5F3FC]/10 z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={idx}
                className="group relative flex flex-col items-center md:items-start text-center md:text-left z-10"
              >
                {/* Step Circle Card */}
                <div className={`w-14 h-14 rounded-2xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} mb-6 shadow-md group-hover:logo-ring-gradient group-hover:text-white transition-all duration-300 relative`}>
                  <IconComponent className="w-6 h-6" />
                  
                  {/* Floating Step Number */}
                  <span className="absolute -top-3.5 -right-3.5 text-xs font-mono font-bold text-white/40 bg-[#0A0A0A] border border-white/10 rounded-md px-1.5 py-0.5 shadow-sm">
                    {step.num}
                  </span>
                </div>

                {/* Text Context */}
                <h3 className="text-lg font-serif font-semibold text-white mb-2 group-hover:text-[#F472B6] transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-xs text-white/60 leading-relaxed max-w-[240px]">
                  {step.desc}
                </p>

                {/* Staggered Arrow (Mobile/Tablet Only) */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden my-4 text-white/20 font-mono text-lg">
                    &darr;
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Dynamic Guarantee Footer Callout */}
        <div className="mt-16 glass-card p-6 md:p-8 rounded-[24px] border-white/10 max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#F472B6]/5 to-transparent pointer-events-none" />
          <div className="text-left relative z-10">
            <h4 className="text-base font-serif font-semibold text-white">Need a Design Draft First?</h4>
            <p className="text-xs text-white/60 mt-1 max-w-lg">
              No obligation to order! Chat with us, share your names/ideas, and we will prepare a quick sample label draft completely free of charge.
            </p>
          </div>
          <a
            href="https://wa.me/917003222633?text=Hi%20Moment%20Water!%20I%20would%20love%20to%20get%20a%20free%20design%20preview%20draft%20for%20my%20event."
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap bg-[#0A0A0A] hover:bg-white/5 text-[#F472B6] border border-[#F472B6]/25 font-semibold text-xs px-6 py-3.5 rounded-full uppercase tracking-wider transition-all shadow-inner relative z-10 cursor-pointer text-center"
          >
            Get Free Design Draft &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
