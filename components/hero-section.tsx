'use client'

import React from 'react'
import { HeroBackground } from './hero-background'

export function HeroSection() {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100">
      <HeroBackground />

      {/* Decorative illumination */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4s"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Arabic Calligraphy */}
        <div className="mb-8 animate-fade-up elegant-fade" style={{ animationDelay: '0.1s' }}>
          <p className="text-2xl md:text-3xl text-amber-900 font-light mb-2 drop-shadow-lg">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </p>
          <p className="text-sm md:text-base text-amber-800/70 font-body">
            Assalamu Alaikum ورحمة الله وبركاته
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-6 animate-fade-up elegant-fade" style={{ animationDelay: '0.2s' }}>
          <p className="text-xs md:text-sm text-amber-700 tracking-widest uppercase font-light">
            With the blessings of Allah (SWT)
          </p>
        </div>

        {/* Main Heading */}
        <div className="mb-8 animate-fade-up elegant-fade" style={{ animationDelay: '0.3s' }}>
          <p className="text-amber-900 font-heading text-lg md:text-xl font-light mb-8">
            You are cordially invited to the Nikah Ceremony of
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-2">
            <div className="groom-text drop-shadow-lg">
              Mubarak
            </div>
            <div className="relative">
              <div className="text-4xl md:text-5xl animate-pulse">💍</div>
            </div>
            <div className="bride-text drop-shadow-lg">
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
            className="px-8 py-3 bg-gradient-to-r from-rose-400 to-pink-500 text-white hover:from-rose-500 hover:to-pink-600 transition-all duration-300 font-body font-medium tracking-wide uppercase text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105"
          >
            View Invitation
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-700 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-amber-700 rounded-full animate-pulse" />
        </div>
      </div>
    </div>
  )
}
