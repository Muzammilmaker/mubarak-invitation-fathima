'use client'

import React from 'react'

export function QuranVerse() {
  return (
    <section className="min-h-screen bg-emerald-950 py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Decorative Top Border */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>

        {/* Verse Container */}
        <div className="border-2 border-gold/50 rounded-lg p-8 md:p-12 bg-emerald-900/30 backdrop-blur-sm">
          {/* Arabic Verse */}
          <div className="text-center mb-8">
            <p className="font-heading text-xl md:text-2xl text-gold leading-relaxed mb-4 rtl drop-shadow">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            </p>
            <p className="text-gold/60 font-body text-sm">
              وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-2 my-6">
            <div className="w-1 h-1 rounded-full bg-gold" />
            <div className="w-1 h-1 rounded-full bg-gold/70" />
            <div className="w-1 h-1 rounded-full bg-gold" />
          </div>

          {/* English Translation */}
          <div className="text-center">
            <p className="text-cream/90 font-body text-base md:text-lg leading-relaxed mb-4 italic">
              &quot;And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them. And He has put between you affection and mercy.&quot;
            </p>
            <p className="text-gold font-heading text-sm font-light tracking-wide uppercase drop-shadow">
              Quran 30:21
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold" />
          <span className="text-gold text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold" />
        </div>
      </div>
    </section>
  )
}
