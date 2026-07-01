import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, Sparkles, Send, Phone, MapPin, Mail, Clock } from 'lucide-react';
import { EnquiryFormState } from '../types';

interface ContactFormProps {
  customizerData?: {
    name: string;
    subtext: string;
    category: string;
    quantity: number;
  } | null;
}

export default function ContactForm({ customizerData }: ContactFormProps) {
  const [formData, setFormData] = useState<EnquiryFormState>({
    name: '',
    phone: '',
    eventType: 'wedding',
    eventDate: '',
    quantity: 200,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Sync state if user submitted from the Live Customizer above
  useEffect(() => {
    if (customizerData) {
      setFormData(prev => ({
        ...prev,
        name: customizerData.name,
        eventType: customizerData.category,
        quantity: customizerData.quantity,
        message: `I designed a custom layout with Name: "${customizerData.name}" and Subtext: "${customizerData.subtext}" using your Live Studio. I'd love to make this layout real!`
      }));
      
      // Smooth scroll down to contact section so they see the prefilled values
      const contactSection = document.getElementById('enquiry-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [customizerData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleQtyClick = (val: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: val
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Formulate a beautiful, high-converting WhatsApp direct message
    const formattedDate = formData.eventDate ? new Date(formData.eventDate).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }) : 'Not decided yet';

    const text = `*💧 MOMENT WATER ORDER ENQUIRY 💧*
---------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Event Type:* ${formData.eventType.toUpperCase()}
*Event Date:* ${formattedDate}
*Quantity Required:* ${formData.quantity} Bottles

*Special Instructions / Custom Text:*
"${formData.message || 'None'}"

---------------------------------------
_Sent from Moment Water Customizer Web App_`;

    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/919366081439?text=${encodedText}`;

    // Mock quick client feedback, then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      window.open(whatsappUrl, '_blank', 'referrer');
    }, 800);
  };

  return (
    <section id="enquiry-section" className="py-24 px-4 md:px-8 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(165,243,252,0.02),transparent_60%)] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Local Contact details and Brand Hook */}
          <div className="lg:col-span-5 text-left flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#F472B6] mb-4">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                GET A FREE QUOTE
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-white mb-6">
                Start Your <br />
                <span className="gradient-text-gold-pink font-semibold">Keepsake Order</span>
              </h2>
              <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-8 max-w-sm">
                DM us on Instagram or WhatsApp for direct questions, or fill this custom quote sheet to instantly load your requirements into chat!
              </p>
            </div>

            {/* Practical Contact Points (Real-style local details) */}
            <div className="space-y-6 my-8">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center text-[#F472B6] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none">WhatsApp Call/Chat</h4>
                  <a href="tel:+919366081439" className="text-sm font-serif font-semibold text-white hover:text-[#F472B6] transition-colors mt-1 block">+91 93660 81439</a>
                  <span className="text-[10px] text-emerald-400 font-mono">Active 24/7 • Instant Response</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center text-[#F472B6] shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none">Instagram Page</h4>
                  <a 
                    href="https://instagram.com/moment_water" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-sm font-serif font-semibold text-[#F472B6] hover:underline mt-1 block"
                  >
                    @moment_water
                  </a>
                  <span className="text-[10px] text-white/40 font-mono">DM open for drafts & photos</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#F472B6]/10 border border-[#F472B6]/20 flex items-center justify-center text-[#F472B6] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-widest leading-none">Our Studio Location</h4>
                  <p className="text-sm font-serif font-semibold text-white mt-1">Agartala, Tripura, India</p>
                  <span className="text-[10px] text-white/40 font-mono">Delivery to all districts of Tripura</span>
                </div>
              </div>

            </div>

            {/* Delivery Hours notice */}
            <div className="p-4 rounded-2xl bg-[#141414] border border-white/10 text-xs text-white/40 flex items-center gap-3 max-w-sm">
              <Clock className="w-4.5 h-4.5 text-[#FDE68A] shrink-0" />
              <span>Orders must be placed at least 3-5 days in advance for customized layout approvals and secure bottling.</span>
            </div>
          </div>

          {/* RIGHT: Beautiful Interactive enquiry form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 md:p-8 rounded-[32px] border-white/10 shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      Your Full Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyanshu Debbarma"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      WhatsApp Phone Number
                    </label>
                    <input
                      required
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 93660 81439"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      Event / Celebration Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all cursor-pointer"
                    >
                      <option value="wedding">💍 Wedding / Engagement</option>
                      <option value="birthday">🎉 Birthday Celebration</option>
                      <option value="resort">🏨 Resort / Hotel Brand</option>
                      <option value="fest">🎓 College Fest / Corporate Event</option>
                      <option value="prank">🤪 Fun & Prank Keepsake</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                      Approximate Event Date
                    </label>
                    <input
                      required
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleInputChange}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all cursor-pointer font-mono"
                    />
                  </div>
                </div>

                {/* Preset Fast Quantity Buttons */}
                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2.5">
                    Select Bottle Quantity
                  </label>
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[100, 200, 500, 1000].map((num) => (
                      <button
                        type="button"
                        key={num}
                        onClick={() => handleQtyClick(num)}
                        className={`py-2 px-1 rounded-xl text-xs font-mono font-bold border transition-all cursor-pointer ${
                          formData.quantity === num
                            ? 'bg-gradient-to-r from-[#FDE68A]/20 to-[#F472B6]/10 border-[#F472B6]/50 text-white'
                            : 'bg-[#0A0A0A] border-white/5 text-white/40 hover:text-white hover:border-white/10'
                        }`}
                      >
                        {num} Qty
                      </button>
                    ))}
                  </div>
                  
                  {/* Fine grain manual slider input */}
                  <div className="flex items-center gap-3 bg-[#0A0A0A] p-3 rounded-xl border border-white/10">
                    <input
                      type="range"
                      min={50}
                      max={2000}
                      step={50}
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      className="flex-1 accent-[#F472B6] h-1 cursor-pointer"
                    />
                    <span className="text-xs font-mono text-[#F472B6] bg-[#F472B6]/10 px-2.5 py-0.5 rounded-full border border-[#F472B6]/20 whitespace-nowrap">
                      {formData.quantity} Bottles
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2">
                    Custom Message, Names or Logo Notes
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Provide details like Couple Names, Birthday Person, Resort Logo requests, or comedic texts for prank bottles..."
                    className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#F472B6]/50 transition-all"
                  />
                </div>

                {/* Action Submit */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#FDE68A] to-[#F472B6] hover:opacity-90 disabled:opacity-50 text-black font-bold py-4 px-6 rounded-full flex items-center justify-center gap-3 text-xs uppercase tracking-widest transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 text-black" />
                    <span>{isSubmitting ? 'Formulating Order Chat...' : 'Send Enquiry via WhatsApp'}</span>
                  </button>
                </div>

                {success && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-400 font-mono text-center">
                    🚀 Order sheet generated! WhatsApp chat redirected successfully.
                  </div>
                )}

              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
