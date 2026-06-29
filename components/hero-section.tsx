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
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <p className="text-xl md:text-2xl text-gold font-light mb-2">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-sm md:text-base text-cream/80 font-body">
            Assalamu Alaikum ورحمة الله وبركاته
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs md:text-sm text-gold/80 tracking-widest uppercase font-light">
            With the blessings of Allah (SWT)
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-cream font-heading text-lg md:text-xl font-light mb-6">
            You are cordially invited to the Nikah Ceremony of
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold font-light">
              Mubarak
            </h1>
            <span className="text-gold text-2xl md:text-3xl">❤</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-gold font-light">
              Fathima
            </h1>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => {
              document.getElementById('invitation')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 border-2 border-gold text-gold hover:bg-gold/10 transition-all duration-300 font-body font-medium tracking-wide uppercase text-sm"
          >
            View Invitation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
