'use client'

import React from 'react'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <svg
        viewBox="0 0 1200 800"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#0B3D2E', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#1a5c42', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0B3D2E', stopOpacity: 1 }} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Sky */}
        <rect width="1200" height="800" fill="url(#skyGradient)" />

        {/* Stars */}
        <circle cx="150" cy="100" r="1.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="300" cy="80" r="1" fill="#D4AF37" opacity="0.6" />
        <circle cx="450" cy="120" r="1.2" fill="#D4AF37" opacity="0.7" />
        <circle cx="600" cy="100" r="1" fill="#D4AF37" opacity="0.5" />
        <circle cx="750" cy="90" r="1.5" fill="#D4AF37" opacity="0.8" />
        <circle cx="900" cy="110" r="1" fill="#D4AF37" opacity="0.6" />
        <circle cx="1050" cy="95" r="1.2" fill="#D4AF37" opacity="0.7" />

        {/* Crescent Moon */}
        <circle cx="1000" cy="150" r="60" fill="#FFF9F0" />
        <circle cx="1020" cy="140" r="55" fill="#0B3D2E" />

        {/* Ground */}
        <rect y="500" width="1200" height="300" fill="#062A22" />

        {/* Palm Trees Left */}
        <g opacity="0.7">
          {/* Trunk */}
          <rect x="80" y="420" width="20" height="120" fill="#3d2d1f" />
          {/* Fronds */}
          <ellipse cx="90" cy="400" rx="60" ry="40" fill="#1a4d2e" transform="rotate(-30 90 400)" />
          <ellipse cx="90" cy="400" rx="60" ry="40" fill="#1a4d2e" transform="rotate(30 90 400)" />
          <ellipse cx="90" cy="400" rx="50" ry="35" fill="#2d7a4a" />
        </g>

        {/* Palm Trees Right */}
        <g opacity="0.7">
          {/* Trunk */}
          <rect x="1100" y="420" width="20" height="120" fill="#3d2d1f" />
          {/* Fronds */}
          <ellipse cx="1110" cy="400" rx="60" ry="40" fill="#1a4d2e" transform="rotate(-30 1110 400)" />
          <ellipse cx="1110" cy="400" rx="60" ry="40" fill="#1a4d2e" transform="rotate(30 1110 400)" />
          <ellipse cx="1110" cy="400" rx="50" ry="35" fill="#2d7a4a" />
        </g>

        {/* Mosque Building */}
        <g opacity="0.9">
          {/* Main building */}
          <rect x="350" y="280" width="500" height="220" fill="#062A22" stroke="#D4AF37" strokeWidth="2" />
          {/* Dome */}
          <circle cx="600" cy="250" r="80" fill="#1a5c42" stroke="#D4AF37" strokeWidth="2" />
          <circle cx="600" cy="250" r="10" fill="#D4AF37" />
        </g>

        {/* Minarets */}
        <g>
          {/* Left Minaret */}
          <rect x="280" y="200" width="30" height="300" fill="#062A22" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="295" cy="180" r="25" fill="#1a5c42" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="295" cy="170" r="8" fill="#D4AF37" />

          {/* Right Minaret */}
          <rect x="890" y="200" width="30" height="300" fill="#062A22" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="905" cy="180" r="25" fill="#1a5c42" stroke="#D4AF37" strokeWidth="1.5" />
          <circle cx="905" cy="170" r="8" fill="#D4AF37" />
        </g>

        {/* Lanterns */}
        <g filter="url(#glow)">
          <circle cx="400" cy="150" r="12" fill="#D4AF37" opacity="0.8" />
          <circle cx="800" cy="140" r="12" fill="#D4AF37" opacity="0.7" />
          <circle cx="300" cy="180" r="10" fill="#D4AF37" opacity="0.6" />
          <circle cx="900" cy="190" r="10" fill="#D4AF37" opacity="0.6" />
        </g>

        {/* Islamic Geometric Pattern Border - Top */}
        <line x1="0" y1="50" x2="1200" y2="50" stroke="#D4AF37" strokeWidth="2" opacity="0.5" />
        <line x1="0" y1="52" x2="1200" y2="52" stroke="#D4AF37" strokeWidth="1" opacity="0.3" />
      </svg>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-950 opacity-40" />
    </div>
  )
}
