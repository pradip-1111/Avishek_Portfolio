"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseenter", onMouseEnter);
      document.addEventListener("mouseleave", onMouseLeave);
      document.addEventListener("mousedown", onMouseDown);
      document.addEventListener("mouseup", onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };
    
    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);
    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);

    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button, input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    addEventListeners();
    handleLinkHoverEvents();

    const observer = new MutationObserver(() => handleLinkHoverEvents());
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;
  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) return null; // Hide on touch devices

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[100] h-8 w-8 rounded-full border-2 border-primary"
      style={{
        borderColor: "var(--foreground)",
        mixBlendMode: "difference"
      }}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
        opacity: hidden ? 0 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
    />
  );
}
