'use client'

import React from 'react'
import { HeroBackground } from './hero-background'

export function HeroSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Arabic Calligraphy */}
        <div className="mb-8 animate-fade-up elegant-fade" style={{ animationDelay: '0.1s' }}>
          <p className="text-2xl md:text-3xl font-light mb-2 drop-shadow-lg" style={{ color: '#C9A876' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-sm md:text-base font-body" style={{ color: '#3D2817' }}>
            Assalamu Alaikum ورحمة الله وبركاته
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-6 animate-fade-up elegant-fade" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs md:text-sm tracking-widest uppercase font-light" style={{ color: '#C9A876' }}>
            With the blessings of Allah (SWT)
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-up elegant-fade" style={{ animationDelay: '0.3s' }}>
          <p className="font-heading text-lg md:text-xl font-light mb-8" style={{ color: '#3D2817' }}>
            You are cordially invited to the Nikah Ceremony of
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-2">
            <div style={{ fontFamily: 'var(--font-script)', fontSize: '3.5rem', fontWeight: '400', color: '#D4AF37', textShadow: '0 2px 10px rgba(212, 175, 55, 0.4)' }}>
              Mubarak
            </div>
            <div className="relative">
              <div className="text-4xl md:text-5xl animate-pulse">💍</div>
            </div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: '3.5rem', fontWeight: '400', color: '#D4AF37', textShadow: '0 2px 10px rgba(212, 175, 55, 0.4)' }}>
              Fathima
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-up elegant-fade" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => {
              document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border-2 transition-all duration-300 font-body font-medium tracking-wide uppercase text-sm rounded-lg"
            style={{ 
              borderColor: '#C9A876',
              color: '#C9A876',
              backgroundColor: 'transparent'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(201, 168, 118, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            View Invitation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 rounded-full flex justify-center p-2" style={{ borderColor: '#C9A876' }}>
          <div className="w-1 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C9A876' }} />
        </div>
      </div>
    </div>
  )
}
