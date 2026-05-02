"use client";

import { motion } from "framer-motion";

const workflow = [
  {
    step: "01",
    title: "Insight & Research",
    description: "Deep diving into the problem space, identifying user needs, and establishing the technical architecture.",
    tags: ["Analysis", "UX Research", "Discovery"]
  },
  {
    step: "02",
    title: "Logic & Interface",
    description: "Iterating on high-fidelity designs and translating them into a robust component-based architecture.",
    tags: ["UI Design", "Prototyping", "UX Strategy"]
  },
  {
    step: "03",
    title: "Code & Craft",
    description: "Writing clean, modular, and high-performance code with a focus on accessibility and scalability.",
    tags: ["Development", "Next.js", "Clean Code"]
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Optimizing deployment pipelines, monitoring performance, and ensuring a seamless transition to production.",
    tags: ["DevOps", "Vite", "Performance"]
  }
];

export function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-background">
      {/* Background Decorative Mesh */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-32 text-center mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-8"
          >
            Workflow Architecture
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground leading-tight mb-8">
            The Creative <span className="text-primary italic">Engine.</span>
          </h2>
          <p className="text-sm md:text-base text-foreground/40 font-medium mx-auto max-w-lg">
            A systematic approach to solving complex problems, from initial discovery to high-scale production.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Animated Progress Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 hidden lg:block" />

          {workflow.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row items-center justify-between gap-12 group ${
                i % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div className={`lg:w-[45%] w-full`}>
                <div className={`glass p-10 md:p-14 rounded-[3.5rem] border-2 border-foreground/5 group-hover:border-primary/30 transition-all duration-700 relative overflow-hidden flex flex-col ${
                  i % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                }`}>
                  {/* Step Background Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <span className="text-6xl md:text-8xl font-black text-foreground/[0.03] mb-6 leading-none group-hover:text-primary/10 transition-colors">
                    {item.step}
                  </span>
                  
                  <div className="space-y-4 mb-8">
                    <h3 className="text-2xl md:text-4xl font-black tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-foreground/50 font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "lg:justify-end" : "lg:justify-start"}`}>
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-foreground/5 text-[10px] font-black uppercase tracking-widest text-foreground/40 border border-foreground/10 group-hover:border-primary/20 group-hover:text-primary transition-all">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Central Node */}
              <div className="relative lg:w-[10%] flex justify-center z-20">
                <motion.div 
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  className="w-12 h-12 rounded-full glass border-2 border-primary/30 flex items-center justify-center bg-background shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] cursor-pointer group-hover:border-primary"
                >
                  <div className="w-3 h-3 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                </motion.div>
                {/* Decorative Line Pulse */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary/10 blur-2xl rounded-full animate-pulse pointer-events-none" />
              </div>

              {/* Spacer/Empty Side */}
              <div className="lg:w-[45%] hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
