"use client";

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiArrowRight, FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiFacebook } from "react-icons/fi";
import Magnetic from "../ui/Magnetic";

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background Signal Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(var(--primary-rgb),0.1)_0%,transparent_50%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Centered & Small */}
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-8"
          >
             <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Live Connection</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
            Let&apos;s <span className="text-primary italic">Talk.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-lg mx-auto">
            Initiate a transmission for architectural consultation, collaborations, or general inquiries.
          </p>
        </div>

        <div className="flex flex-col items-center gap-20">
          
          {/* Transmission Metadata Bar */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 py-6 px-10 glass rounded-full border-2 border-foreground/5 bg-background/50 backdrop-blur-xl">
             <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase tracking-widest text-foreground/30 mb-1">Status</span>
                <span className="text-xs font-bold text-emerald-500 uppercase tracking-widest">Available</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase tracking-widest text-foreground/30 mb-1">Location</span>
                <span className="text-xs font-bold uppercase tracking-widest">Birgunj, Nepal</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-[8px] font-black uppercase tracking-widest text-foreground/30 mb-1">Response</span>
                <span className="text-xs font-bold uppercase tracking-widest">&lt; 24 Hours</span>
             </div>
          </div>

          {/* Premium Form - Centered & Refined */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-2xl glass p-10 md:p-16 rounded-[4rem] border-2 border-foreground/5 relative shadow-2xl bg-background/40 backdrop-blur-3xl"
          >
            <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="group">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-foreground/20 mb-3 block group-focus-within:text-primary transition-colors">Identification</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b border-foreground/10 pb-3 outline-none focus:border-primary text-xl font-bold transition-colors placeholder:text-foreground/5"
                    placeholder="Your Name"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-foreground/20 mb-3 block group-focus-within:text-primary transition-colors">Protocol</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b border-foreground/10 pb-3 outline-none focus:border-primary text-xl font-bold transition-colors placeholder:text-foreground/5"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-foreground/20 mb-3 block group-focus-within:text-primary transition-colors">Transmission Payload</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-foreground/10 pb-3 outline-none focus:border-primary text-xl font-bold transition-colors resize-none placeholder:text-foreground/5"
                  placeholder="Tell me about your project or objective..."
                ></textarea>
              </div>

              <div className="pt-6 flex justify-center">
                <Magnetic strength={0.3}>
                  <button
                    type="submit"
                    className="group relative px-12 py-5 bg-primary rounded-full text-background font-black uppercase tracking-[0.2em] text-xs overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-10px_rgba(var(--primary-rgb),0.5)]"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      Initialize Transmission <FiArrowRight className="group-hover:translate-x-2 transition-transform" />
                    </span>
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </button>
                </Magnetic>
              </div>
            </form>
          </motion.div>

          {/* Social Transmission Hub */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-foreground/40">
              <a href="tel:+977-9845809962" className="hover:text-primary transition-colors">+977-9845809962</a>
              <span className="hidden md:block opacity-20">|</span>
              <a href="tel:+91-9263947815" className="hover:text-primary transition-colors">+91-9263947815</a>
            </div>

            <div className="flex gap-4">
               {[
                 { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/abhishek-gupta-8378b5259?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
                 { icon: <FiInstagram />, href: "https://www.instagram.com/abhish_ekgupta?igsh=emNhamk2eTNlZ2Fj" },
                 { icon: <FiTwitter />, href: "https://x.com/Abhishe19047460" },
                 { icon: <FiFacebook />, href: "https://www.facebook.com/share/1bfeekFVkQ/" },
                 { icon: <FiMail />, href: "mailto:guptaavishek008@gmail.com" }
               ].map((social, i) => (
                 <Magnetic key={i} strength={0.4}>
                   <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-14 h-14 rounded-2xl glass border border-foreground/5 flex items-center justify-center text-xl hover:bg-primary hover:text-background hover:border-primary transition-all duration-500 shadow-xl"
                  >
                     {social.icon}
                   </a>
                 </Magnetic>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

