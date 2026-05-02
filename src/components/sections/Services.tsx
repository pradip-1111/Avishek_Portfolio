"use client";

import { motion } from "framer-motion";
import { FiLayout, FiServer, FiSmartphone, FiDatabase } from "react-icons/fi";

const services = [
  {
    title: "frontend architecture",
    service: "Modern UI/UX",
    description: "Building resilient, high-fidelity user interfaces using Next.js and Framer Motion. Focusing on accessibility and micro-interactions.",
    icon: <FiLayout />,
    color: "bg-blue-500"
  },
  {
    title: "backend systems",
    service: "Scalable Infrastructure",
    description: "Designing robust server-side logic and database schemas that scale. Specialized in Node.js, Go, and real-time streaming.",
    icon: <FiServer />,
    color: "bg-purple-500"
  },
  {
    title: "mobile mastery",
    service: "Cross-Platform",
    description: "Developing native-feel mobile experiences using React Native and Expo. Seamless performance across iOS and Android.",
    icon: <FiSmartphone />,
    color: "bg-emerald-500"
  },
  {
    title: "cloud & devops",
    service: "Automation",
    description: "Streamlining deployment pipelines and managing cloud infrastructure on AWS/Vercel. Performance monitoring and CI/CD.",
    icon: <FiDatabase />,
    color: "bg-orange-500"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-foreground/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-6">Expertise<span className="text-primary">.</span></h2>
            <p className="text-base md:text-lg text-foreground/40 font-medium">Turning complex problems into elegant, functional digital solutions.</p>
          </div>
          <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">Capabilities 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 glass rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 flex flex-col h-[400px] justify-between border-2 border-foreground/5 shadow-xl relative overflow-hidden"
            >
              {/* Hover Background Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="space-y-4 relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${s.color} bg-opacity-20 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-500`}>
                  {s.icon}
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 group-hover:text-primary transition-all">
                  {s.title}
                </h3>
                <h4 className="text-xl font-bold tracking-tight group-hover:translate-x-1 transition-transform">
                  {s.service}
                </h4>
              </div>
              <p className="text-sm opacity-60 font-medium leading-relaxed relative z-10 group-hover:opacity-100 transition-opacity">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Infinite Tech Marquee */}
        <div className="relative flex overflow-hidden group py-10 border-y border-foreground/5 bg-foreground/[0.02]">
          <div className="flex animate-marquee whitespace-nowrap gap-12 items-center">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center">
                {["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "Python", "AWS", "Framer Motion", "MongoDB", "PostgreSQL", "Docker"].map((tech) => (
                  <span key={tech} className="text-4xl md:text-6xl font-black text-foreground/5 group-hover:text-primary/40 transition-colors uppercase italic tracking-tighter">
                    {tech}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

