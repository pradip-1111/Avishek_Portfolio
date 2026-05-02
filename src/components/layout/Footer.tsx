"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 border-t border-foreground/5 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-[15vw] font-black tracking-tighter leading-none text-foreground/[0.03] select-none uppercase">
              AVISHEK
            </h2>
          </motion.div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold uppercase tracking-widest text-foreground/40">
            <div>
              &copy; {currentYear} Avishek. All rights reserved.
            </div>
            
            <div className="flex gap-12">
              <a href="#" className="hover:text-primary transition-colors">Privacy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms</a>
            </div>

            <div className="flex items-center gap-4">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for new projects
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />
    </footer>
  );
}
