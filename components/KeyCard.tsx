import React from "react";

interface KeyCardProps {
  title: string;
  description: string;
  points: string[];
  color?: string; // e.g., "bg-green-600", "bg-blue-600", "bg-red-600"
  icon?: React.ReactNode; // Pass in custom SVG if needed
}

export default function KeyCard({
  title,
  description,
  points,
  color = "bg-green-600",
  icon,
}: KeyCardProps) {
  return (
    <div className="key-card">
      <div className={`icon-box ${color}`}>
        {icon ? (
          icon
        ) : (
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        )}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      <ul>
        {points.map((point, idx) => (
          <li key={idx}>• {point}</li>
        ))}
      </ul>
    </div>
  );
}
