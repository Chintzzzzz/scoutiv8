"use client";

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* MOBILE ONLY BUTTON */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-6 right-6 z-50 
          md:hidden 
          transition-all duration-300
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
      >
        <FaArrowCircleUp
          className="
            text-[#daba0b] 
            bg-black rounded-full 
            shadow-[0_0_15px_rgba(0,0,0,0.8)] 
            hover:scale-110 transition-transform
          "
          size={48}
        />
      </button>
    </div>
  );
}
