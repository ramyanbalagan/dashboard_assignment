// CircularProgress.js
import { CheckIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CircularProgress = ({ percentage }) => {
  const radius = 30; // Radius to make it 60px in diameter
  const strokeWidth = 6; // Stroke width
  const normalizedRadius = radius - strokeWidth * 0.5; // To account for stroke width
  const circumference = normalizedRadius * 2 * Math.PI; // Circumference of the circle
  const strokeDashoffset = circumference - (percentage / 100) * circumference; // Calculate the dash offset

  return (
    <svg height="60" width="60"> {/* Set SVG height and width to 60px */}
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx="30" // Centered in a 60px container
        cy="30" // Centered in a 60px container
      />
      <circle
        stroke="#0C50A3"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx="30" // Centered in a 60px container
        cy="30" // Centered in a 60px container
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
      />
      {percentage === 100 ? (
        <svg
          x="10"
          y="10"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 12l2 2 4-4"
            stroke="green"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="black">
          {percentage}%
        </text>
      )}
    </svg>
  );
};

export default CircularProgress;
