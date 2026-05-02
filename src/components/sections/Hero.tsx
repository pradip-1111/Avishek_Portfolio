"use client";

import { motion } from "framer-motion";
import Magnetic from "../ui/Magnetic";
import { Typewriter } from "../ui/Typewriter";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Aurora Mesh */}
      <div className="absolute inset-0 z-0 bg-background overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%]">
          <motion.div
            className="absolute top-[20%] left-[30%] w-[40%] h-[40%] bg-primary/20 blur-[100px]"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
            style={{ animation: "aurora-mesh 20s infinite linear" }}
          />
          <motion.div
            className="absolute bottom-[20%] right-[30%] w-[45%] h-[45%] bg-blue-500/20 blur-[120px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              x: [0, -120, 0],
              y: [0, -60, 0]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            style={{ animation: "aurora-mesh 25s infinite linear reverse" }}
          />
          <motion.div
            className="absolute top-[40%] right-[20%] w-[35%] h-[35%] bg-purple-500/15 blur-[90px]"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 80, 0],
              y: [0, -40, 0]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            style={{ animation: "aurora-mesh 18s infinite linear" }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-20">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center rounded-full border border-foreground/10 bg-background/50 px-4 py-1.5 text-xs font-medium mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2.5 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
            Ready for new challenges
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.85] text-foreground"
          >
            Abhishek <br />
            Gupta <br />
            <span className="text-primary italic text-3xl md:text-5xl block mt-4">
              <Typewriter words={["Developer", "Designer", "Engineer", "Architect"]} />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-foreground/60 mb-12 max-w-lg font-medium tracking-tight"
          >
            Synthesizing design and engineering to build performant, human-centric digital interfaces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <Magnetic strength={0.2}>
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-all shadow-xl"
              >
                Selected Work
              </a>
            </Magnetic>
            <Magnetic strength={0.4}>
              <a
                href="#contact"
                className="px-8 py-4 rounded-full glass font-bold transition-all border-foreground/10 hover:border-foreground/30 shadow-lg"
              >
                Get In Touch
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right Side - Square Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative order-1 lg:order-2"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-[3rem] border-4 border-primary/20 p-2 glass overflow-hidden relative group shadow-2xl">
            <img 
              src="/profile.jpg" 
              alt="Abhishek Gupta" 
              className="w-full h-full object-cover rounded-[2.5rem] grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -inset-6 border-2 border-primary/20 rounded-[3.5rem] -z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 blur-3xl -z-20 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}


