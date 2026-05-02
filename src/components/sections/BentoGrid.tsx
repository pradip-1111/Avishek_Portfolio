"use client";

import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowUpRight, FiCode, FiMapPin, FiClock, FiTwitter } from "react-icons/fi";
import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiFramer } from "react-icons/si";
import Magnetic from "../ui/Magnetic";
import { useEffect, useState } from "react";

const BentoCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className={`glass rounded-[2rem] p-8 group relative overflow-hidden flex flex-col ${className}`}
  >
    {children}
  </motion.div>
);

export function BentoGrid() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZone: "Asia/Kathmandu" 
      }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 h-auto md:h-[900px]">
        
        {/* Bio Card - Large */}
        <BentoCard className="md:col-span-2 md:row-span-2 justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-bold uppercase tracking-wider">
              <FiCode /> Software Architect
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter leading-tight text-center md:text-left">
              Blending meticulous <span className="text-primary">code</span> with intentional <span className="italic">design</span>.
            </h2>
            <p className="text-sm text-foreground/50 leading-relaxed font-medium max-w-sm text-center md:text-left mx-auto md:mx-0">
              I specialize in building complex web ecosystems that are as beautiful as they are technically sound. My philosophy is rooted in performance and user-centric architecture.
            </p>
          </div>
          
          <div className="flex gap-4 mt-8">
            <div className="flex -space-x-4">
              <SiNextdotjs size={40} className="p-2 bg-background rounded-xl border border-foreground/5 z-40" />
              <SiReact size={40} className="p-2 bg-background rounded-xl border border-foreground/5 z-30" />
              <SiTypescript size={40} className="p-2 bg-background rounded-xl border border-foreground/5 z-20" />
              <SiTailwindcss size={40} className="p-2 bg-background rounded-xl border border-foreground/5 z-10" />
            </div>
            <div className="text-xs font-bold self-center text-foreground/30">+ many more tools</div>
          </div>
        </BentoCard>

        {/* Location & Time Card */}
        <BentoCard className="md:col-span-2 md:row-span-1 flex-row items-center justify-around gap-8 bg-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary text-2xl shadow-lg">
              <FiMapPin />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-foreground/40 mb-1">Location</p>
              <h4 className="text-xl font-bold tracking-tight">Birgunj, Nepal</h4>
            </div>
          </div>
          <div className="w-[2px] h-12 bg-foreground/10" />
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center text-primary text-2xl shadow-lg">
              <FiClock />
            </div>
            <div>
              <p className="text-xs font-bold uppercase text-foreground/40 mb-1">Local Time</p>
              <h4 className="text-xl font-bold tracking-tight">{time || "12:00 PM"}</h4>
            </div>
          </div>
        </BentoCard>

        {/* Connect Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 justify-center items-center gap-6">
          <div className="flex gap-4">
            <Magnetic strength={0.4}>
              <a 
                href="https://www.linkedin.com/in/abhishek-gupta-8378b5259?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-3xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all text-xl shadow-sm"
              >
                <FiLinkedin />
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a 
                href="https://x.com/Abhishe19047460" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-14 h-14 rounded-3xl glass flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all text-xl shadow-sm"
              >
                <FiTwitter />
              </a>
            </Magnetic>
          </div>
          <span className="text-xs font-black uppercase tracking-widening text-foreground/30">Connect</span>
        </BentoCard>

        {/* Stats Card */}
        <BentoCard className="md:col-span-1 md:row-span-1 justify-between bg-zinc-900 text-white border-none">
          <div>
            <span className="text-[3rem] font-black leading-none tracking-tighter">2+</span>
            <p className="text-xs font-bold uppercase text-white/40 mt-1">Years Experience</p>
          </div>
          <div className="self-end">
            <FiArrowUpRight size={32} className="text-primary opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </BentoCard>

        {/* Learning Spotlight */}
        <BentoCard className="md:col-span-2 md:row-span-1 justify-center relative bg-gradient-to-br from-primary/10 to-transparent">
          <h4 className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Focusing on</h4>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight max-w-sm mb-6">
             Autonomous AI Agents & Large Language Models.
          </h3>
          <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 group-hover:opacity-80 transition-opacity duration-700 hidden md:block">
            <SiFramer size={120} className="animate-spin-slow" />
          </div>
        </BentoCard>

      </div>
    </section>
  );
}

