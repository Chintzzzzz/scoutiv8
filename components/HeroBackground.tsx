"use client";

import { useState, useEffect } from "react";

export default function HeroBackground() {
  const backgrounds = ["/fb1.jpg", "/fb2.jpg", "/fb3.jpg", "/fb4.jpg", "/fb5.jpg"];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 3000); // 5 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-center bg-cover transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${bg}')` }}
        />
      ))}
    </div>
  );
}
