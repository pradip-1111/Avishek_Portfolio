"use client";

import { motion } from "framer-motion";

export function About() {
  const stats = [
    { label: "Code Quality", value: "99%", color: "text-emerald-500" },
    { label: "Performance", value: "100", color: "text-blue-500" },
    { label: "Accessibility", value: "AA+", color: "text-purple-500" }
  ];

  const technologies = ["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "PostgreSQL", "AWS", "Framer"];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Dynamic Background Noise/Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.02),transparent_70%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - High Fashion Style */}
        <div className="flex flex-col items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-[1px] h-20 bg-gradient-to-b from-transparent via-primary to-transparent mb-8"
          />
          <h2 className="text-sm font-black uppercase tracking-[0.6em] text-primary mb-6">Discovery</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-center max-w-4xl leading-tight">
            Engineering digital <span className="italic text-primary">masterpieces</span> through the lens of modern architecture.
          </h3>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Main Bio Card - 7 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass rounded-[3rem] p-10 md:p-16 border-2 border-foreground/5 relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 text-6xl font-black text-foreground/[0.03] italic">01</div>
            
            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-black uppercase tracking-widest text-primary">The Visionary</h4>
                <p className="text-xl md:text-2xl font-bold leading-relaxed">
                  I don&apos;t just build websites; I craft digital ecosystems. My philosophy is rooted in the belief that great software is a symphony of clean logic and invisible design.
                </p>
              </div>

              <div className="h-[1px] w-20 bg-primary/30" />

              <p className="text-base md:text-lg text-foreground/50 font-medium leading-relaxed max-w-2xl">
                With a background in both Frontend Architecture and Backend Systems, I bridge the gap between user experience and technical feasibility. Every project is an opportunity to push the limits of performance and accessibility.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-foreground/5">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-[0.6rem] font-black uppercase tracking-widest text-foreground/30 mb-2">{stat.label}</p>
                    <p className={`text-2xl md:text-3xl font-black ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Visual Card - 5 Columns */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="flex-1 glass rounded-[3rem] p-2 border-2 border-foreground/5 overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                alt="Code Focus" 
                className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-40" />
            </div>

            <div className="glass rounded-[2.5rem] p-8 border border-foreground/5 flex flex-col justify-center gap-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-foreground/30">Current Arsenal</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-xl bg-foreground/5 text-xs font-bold border border-foreground/10 hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Discovery Marquee */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 py-10 border-y border-foreground/5 relative flex overflow-hidden"
        >
          <div className="flex animate-marquee whitespace-nowrap gap-20">
             {[...Array(2)].map((_, i) => (
               <div key={i} className="flex gap-20 items-center">
                 {["INNOVATION", "ACCESSIBILITY", "PERFORMANCE", "SCALABILITY", "UX MATURITY"].map((text) => (
                   <span key={text} className="text-5xl font-black text-foreground/[0.02] tracking-widest italic outline-text">
                     {text}
                   </span>
                 ))}
               </div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
