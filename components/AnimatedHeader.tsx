"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeInHeaderProps {
  children: ReactNode;
  delay?: number; // optional delay in seconds
  className?: string; // optional extra Tailwind classes
}

export default function AnimatedHeader({ children, delay = 0, className = "" }: FadeInHeaderProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeIn", delay }}
      className={`text-5xl md:text-5xl text-center leading-relaxed font-bold text-white mb-5 ${className}`}
    >
      {children}
    </motion.h2>
  );
}
{/*text-4xl text-center leading-relaxed font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-5 ${className}*/}