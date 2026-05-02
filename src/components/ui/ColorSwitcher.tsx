"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCommand } from "react-icons/fi";

const colors = [
  { name: "Violet", value: "0.627 0.165 303.891", class: "bg-[#8b5cf6]" },
  { name: "Emerald", value: "0.627 0.2 150", class: "bg-[#10b981]" },
  { name: "Rose", value: "0.627 0.22 0", class: "bg-[#f43f5e]" },
  { name: "Sky", value: "0.627 0.18 240", class: "bg-[#0ea5e9]" },
  { name: "Amber", value: "0.627 0.25 80", class: "bg-[#f59e0b]" }
];

export function ColorSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeColor, setActiveColor] = useState(colors[0].value);

  const setAccentColor = (value: string) => {
    document.documentElement.style.setProperty("--accent-oklch", value);
    setActiveColor(value);
    localStorage.setItem("portfolio-accent", value);
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-accent");
    if (saved) setAccentColor(saved);
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="glass p-3 rounded-[2rem] border border-foreground/10 flex flex-col gap-3 shadow-2xl"
          >
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setAccentColor(color.value)}
                className={`w-10 h-10 rounded-full ${color.class} border-2 ${activeColor === color.value ? "border-foreground scale-110" : "border-transparent"} hover:scale-125 transition-all relative group`}
              >
                 <span className="absolute right-full mr-3 px-2 py-1 bg-background text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-foreground/5 whitespace-nowrap">
                  {color.name}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-3xl glass flex items-center justify-center text-2xl hover:bg-primary/20 hover:text-primary transition-all shadow-xl hover:scale-110 active:scale-95 ${isOpen ? "bg-primary text-background" : ""}`}
      >
        <FiCommand />
      </button>
    </div>
  );
}
