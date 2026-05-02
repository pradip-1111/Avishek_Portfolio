"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const timelineData = [
  {
    title: "Software Engineer Intern",
    organization: "Tech Solutions Corp",
    date: "2024 — PRESENT",
    description: "Contributing to the development of scalable web applications using React and Node.js. Focus on optimizing frontend performance and UI consistency.",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    title: "Research Intern",
    organization: "Amrita Vishwa Vidyapeetham",
    date: "2023 — 2024",
    description: "Published research papers on Deep Learning and Computer Vision (IEEE Xplore). Specialized in Sleep Apnea detection and STN-CNN models.",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Junior Web Developer",
    organization: "Digital Agency",
    date: "2022 — 2023",
    description: "Developed and maintained client websites using modern frontend frameworks. Collaborated with designers to implement responsive layouts.",
    color: "from-emerald-500/20 to-teal-500/20"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decorative Mesh */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:30px_30px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 mb-8"
          >
             <span className="text-[9px] font-black uppercase tracking-[0.4em] text-primary">Tenure & Excellence</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">
            Professional <span className="text-primary italic">Lineage.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-lg mx-auto">
            A chronological excavation of engineering leadership and architectural vision.
          </p>
        </div>

        <div className="space-y-12">
          {timelineData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="glass p-10 md:p-14 rounded-[3rem] border-2 border-foreground/5 group-hover:border-primary/20 transition-all duration-700 shadow-xl bg-background/50 backdrop-blur-3xl text-center">
                {/* Floating Large Index */}
                <div className="absolute top-4 right-8 text-7xl font-black text-foreground/[0.02] group-hover:text-primary/[0.05] transition-colors leading-none select-none">
                  0{timelineData.length - i}
                </div>

                <div className="space-y-8 relative z-10">
                  <div className="space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{item.date}</span>
                    <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg md:text-xl text-foreground/40 font-bold">at {item.organization}</p>
                  </div>

                  <p className="text-sm md:text-base text-foreground/50 leading-relaxed font-medium max-w-2xl mx-auto">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center pt-6 border-t border-foreground/5">
                     {["Architecture", "Leadership", "Scalability"].map((skill) => (
                       <span key={skill} className="px-4 py-1.5 rounded-full bg-foreground/5 text-[9px] font-black uppercase tracking-widest text-foreground/30 border border-foreground/10 group-hover:border-primary/20 group-hover:text-primary transition-all">
                         {skill}
                       </span>
                     ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

