"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiExternalLink, FiAward } from "react-icons/fi";

const publications = [
  {
    title: "A Hybrid Deep Learning Model for Sleep Apnea Detection Using Smartphone-Recorded Audio Signals",
    journal: "IEEE Xplore",
    date: "2024",
    description: "Built a smartphone-audio pipeline for practical screening workflows using a hybrid deep learning architecture designed for robustness on real recordings and user-friendly interpretation.",
    link: "https://ieeexplore.ieee.org/document/11342102",
    category: "Deep Learning"
  },
  {
    title: "Robust Handwritten Digit Recognition for Postal Sorting: A Lightweight STN-CNN Approach with Postal-Specific Augmentation",
    journal: "IEEE Xplore",
    date: "2024",
    description: "Lightweight STN-CNN design for high-speed, real-world postal pipelines, featuring a postal-specific augmentation strategy optimized for accuracy and efficiency in constrained settings.",
    link: "https://ieeexplore.ieee.org/document/11411480",
    category: "Computer Vision"
  }
];

export function Publications() {
  return (
    <section id="publications" className="py-32 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center mb-24 gap-12 text-center mx-auto">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-8"
            >
              <FiAward /> Research & Contributions
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black tracking-tighter mb-8 leading-tight"
            >
              Academic <br />
              <span className="text-primary italic">Publications.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-foreground/40 font-medium leading-relaxed"
            >
              Bridging the gap between theoretical research and production-ready architecture.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative hidden lg:block"
          >
            <div className="w-48 h-48 rounded-[3rem] border-2 border-foreground/5 glass flex items-center justify-center text-primary/20 text-8xl rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <FiBookOpen />
            </div>
            <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-background font-black text-xl shadow-xl">
              {publications.length}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {publications.map((pub, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Numbering Background */}
              <div className="absolute -top-12 -left-4 text-[12rem] font-black text-foreground/[0.03] pointer-events-none select-none leading-none group-hover:text-primary/[0.05] transition-colors duration-500">
                0{i + 1}
              </div>

              <div className="glass p-8 md:p-12 rounded-[3rem] border-2 border-foreground/5 hover:border-primary/20 transition-all duration-500 flex flex-col lg:flex-row justify-between gap-10 items-start lg:items-center relative z-10 overflow-hidden shadow-xl hover:shadow-primary/5">
                {/* Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/10">
                      {pub.category}
                    </span>
                    <div className="h-[1px] w-8 bg-foreground/10" />
                    <span className="text-xs font-bold text-foreground/40 tracking-widest">{pub.date}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-2xl md:text-3xl font-black tracking-tighter group-hover:text-primary transition-colors duration-500 leading-tight">
                      {pub.title}
                    </h3>
                    <p className="text-sm md:text-base font-bold text-primary/60 flex items-center gap-3">
                      <span className="w-6 h-[1px] bg-primary/30" />
                      {pub.journal}
                    </p>
                  </div>
                  
                  <p className="text-sm md:text-base text-foreground/50 max-w-4xl leading-relaxed font-medium">
                    {pub.description}
                  </p>
                </div>

                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full lg:w-auto px-10 py-6 rounded-full bg-foreground text-background font-black flex items-center justify-center gap-3 hover:bg-primary transition-colors duration-500 shadow-2xl group/btn"
                >
                  Explore Paper 
                  <FiExternalLink className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
