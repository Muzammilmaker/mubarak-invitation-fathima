'use client'

import React from 'react'
import { HeroBackground } from './hero-background'

export function HeroSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 text-center px-3 sm:px-4 max-w-4xl">
        {/* Arabic Calligraphy Block */}
        <div className="mb-6 sm:mb-8 animate-fade-up elegant-fade rounded-lg px-6 sm:px-8 py-3 sm:py-4" style={{ animationDelay: '0.1s', backgroundColor: 'rgba(201, 168, 118, 0.15)' }}>
          <p className="text-xl sm:text-2xl md:text-3xl font-light mb-2" style={{ color: '#C9A876' }}>
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-xs sm:text-sm md:text-base font-body" style={{ color: '#3D2817' }}>
            Assalamu Alaikum ورحمة الله وبركاته
          </p>
        </div>

        {/* Blessing Block */}
        <div className="mb-4 sm:mb-6 animate-fade-up elegant-fade rounded-lg px-6 sm:px-8 py-2 sm:py-3" style={{ animationDelay: '0.2s', backgroundColor: 'rgba(168, 120, 96, 0.2)' }}>
          <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase font-medium" style={{ color: '#3D2817' }}>
            With the blessings of Allah (SWT)
          </p>
        </div>

        {/* Main Invitation Block */}
        <div className="mb-6 sm:mb-8 animate-fade-up elegant-fade rounded-lg px-6 sm:px-8 py-4 sm:py-6" style={{ animationDelay: '0.3s', backgroundColor: 'rgba(168, 120, 96, 0.25)' }}>
          <p className="font-heading text-base sm:text-lg md:text-xl font-light mb-6 sm:mb-8" style={{ color: '#3D2817' }}>
            You are cordially invited to the Nikah Ceremony of
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', sm: '3rem', fontWeight: 'bold', color: '#C9A876' }}>
              Mubarak
            </div>
            <div className="text-3xl sm:text-4xl" style={{ color: '#C9A876' }}>
              &
            </div>
            <div style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', sm: '3rem', fontWeight: 'bold', color: '#D4967D' }}>
              Fathima
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-12 animate-fade-up elegant-fade" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => {
              document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 sm:px-8 py-2 sm:py-3 border-2 transition-all duration-300 font-body font-medium tracking-wide uppercase text-xs sm:text-sm rounded-lg"
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
