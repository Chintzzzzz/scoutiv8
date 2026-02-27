"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { IoFootball } from "react-icons/io5";
import FinanceModal from "@/components/FinanceModal";


export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLButtonElement>(null);

  const links = [
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Pricing", href: "#pricing" },
    { name: "Reviews", href: "#reviews" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        iconRef.current &&
        !iconRef.current.contains(target)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="md:hidden relative">
      {/* FOOTBALL ICON (TOGGLE BUTTON) */}
      <motion.button
        ref={iconRef}
        onClick={() => setOpen((prev) => !prev)}
        animate={{ rotate: open ? 180 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="cursor-pointer p-2"
        aria-expanded={open}
        aria-label="Toggle menu"
      >
        <IoFootball className="text-white" size={36} />
      </motion.button>

      {/* DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
  ref={dropdownRef}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
  className="
    fixed left-0 right-0 top-21
  flex flex-col items-center justify-start
  px-6 pt-6 pb-6
  z-500
  bg-black/100 border border-white/10
  "
>
  {links.map((item, idx) => (
    <a
      key={idx}
      href={item.href}
      onClick={() => setOpen(false)}
      className="block text-white text-lg py-2 hover:text-[#daba0b] transition"
    >
      {item.name}
    </a>
  ))}

  <FinanceModal
                email="your@email.com"
                trigger={
                  <button className="bg-[#daba0b] text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                    Book Session
                  </button>
                }
              />
</motion.div>

        )}
      </AnimatePresence>
    </div>
  );
}
