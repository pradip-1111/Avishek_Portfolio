"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-scale modern e-commerce solution with cart functionality, payment gateway integration, and a sophisticated admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
    tech: ["Next.js", "Tailwind", "Stripe", "Prisma"],
    color: "bg-blue-600/10",
    link: "#"
  },
  {
    title: "Task Management App",
    description: "Real-time task tracker with drag-and-drop boards, team collaboration features, and detailed productivity analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1200&auto=format&fit=crop",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    color: "bg-purple-600/10",
    link: "#"
  },
  {
    title: "AI Image Generator",
    description: "A creative tool allowing users to generate high-quality images from text prompts using advanced diffusion models.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    tech: ["Vue.js", "Python", "FastAPI", "Stable Diffusion"],
    color: "bg-emerald-600/10",
    link: "#"
  }
];

const ProjectCard = ({ project, index, range, targetScale }: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div
        style={{ scale, top: `calc(-5% + ${index * 25}px)` }}
        className={`relative h-[500px] w-full max-w-5xl rounded-[40px] glass p-8 md:p-12 flex flex-col md:flex-row gap-8 overflow-hidden border-2 border-foreground/5 shadow-2xl`}
      >
        <div className="flex-1 flex flex-col justify-between z-10">
          <div>
            <h3 className="text-2xl md:text-4xl font-black tracking-tighter mb-6">{project.title}</h3>
            <p className="text-sm md:text-base text-foreground/60 leading-relaxed mb-8 max-w-sm font-medium">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((t: string) => (
                <span key={t} className="px-4 py-1.5 rounded-full bg-foreground/5 text-xs font-bold border border-foreground/10">
                  {t}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-6 mt-8">
            <a href={project.link} className="flex items-center gap-2 font-bold hover:text-primary transition-colors underline decoration-2 underline-offset-8">
              <FiExternalLink /> View Case Study
            </a>
            <a href="#" className="flex items-center gap-2 font-bold hover:text-primary transition-colors underline decoration-2 underline-offset-8">
              <FiGithub /> Source Code
            </a>
          </div>
        </div>

        <div className="flex-1 relative rounded-3xl overflow-hidden h-64 md:h-full">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
        </div>
      </motion.div>
    </div>
  );
};

export function Projects() {
  return (
    <section id="projects" className="relative mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-black tracking-tighter text-foreground mb-4"
        >
          Selected <span className="text-primary italic">Works</span>
        </motion.h2>
        <p className="text-foreground/40 font-bold uppercase tracking-widest text-xs">Scroll to Explore</p>
      </div>
      
      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <ProjectCard key={i} index={i} project={project} range={[i * 0.25, 1]} targetScale={targetScale} />;
        })}
      </div>
    </section>
  );
}

