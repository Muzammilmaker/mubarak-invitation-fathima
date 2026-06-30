'use client'

import React from 'react'

export function DuaSection() {
  return (
    <section className="min-h-screen bg-emerald-950 py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Main Container */}
        <div className="border-4 border-gold/50 rounded-lg p-8 md:p-16 bg-emerald-900/40 backdrop-blur-sm">
          {/* Decorative Top */}
          <div className="flex justify-center gap-3 mb-8">
            <span className="text-gold/50">✦</span>
            <span className="text-gold">✦</span>
            <span className="text-gold/50">✦</span>
          </div>

          {/* Arabic Dua */}
          <div className="text-center mb-8">
            <p className="font-heading text-2xl md:text-3xl text-gold leading-relaxed rtl mb-4 drop-shadow">
              اللهم بارك لهما وبارك عليهما واجمع بينهما في خير
            </p>
          </div>

          {/* Translation */}
          <div className="text-center mb-8 pb-8 border-b-2 border-gold/30">
            <p className="text-white font-body text-base md:text-lg italic leading-relaxed">
              &quot;O Allah, bless them, bless upon them and unite them in goodness.&quot;
            </p>
          </div>

          {/* Blessing Message */}
          <div className="text-center">
            <p className="text-white font-body text-sm md:text-base leading-relaxed mb-6">
              We humbly request all our beloved family and friends to remember this couple in your precious duas. Your blessings and good wishes are the greatest gifts for their new journey together.
            </p>
            <p className="text-gold font-heading text-lg font-light drop-shadow">
              Jazak Allah Khair
            </p>
            <p className="text-white font-body text-sm mt-2">
              Thank you for being part of this blessed occasion
            </p>
          </div>

          {/* Decorative Bottom */}
          <div className="flex justify-center gap-3 mt-8 pt-8 border-t-2 border-gold/30">
            <span className="text-gold/50">✦</span>
            <span className="text-gold">✦</span>
            <span className="text-gold/50">✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
