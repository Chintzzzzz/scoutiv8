"use client"

// FadeInSection.tsx
import React, { useRef, useEffect, useState } from "react";

export function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : "0ms", // Only apply delay on visible
      }}
      className={`opacity-0 translate-y-5 transition-all duration-2000 ${
        isVisible ? "animate-fadeInUp opacity-100 translate-y-0" : ""
      }`}
    >
      {children}
    </div>
  );
}
