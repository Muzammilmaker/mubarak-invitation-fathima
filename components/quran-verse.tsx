'use client'

import React from 'react'

export function QuranVerse() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100 py-16 px-4 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Decorative Top Border */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-rose-400" />
          <span className="text-amber-700 text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-rose-400" />
        </div>

        {/* Verse Container */}
        <div className="border-2 border-amber-400 rounded-lg p-8 md:p-12 bg-gradient-to-br from-amber-100/40 to-rose-100/40 backdrop-blur-sm illumination-glow">
          {/* Arabic Verse */}
          <div className="text-center mb-8">
            <p className="font-heading text-xl md:text-2xl text-amber-900 leading-relaxed mb-4 rtl drop-shadow">
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            </p>
            <p className="text-amber-700 font-body text-sm">
              وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-2 my-6">
            <div className="w-1 h-1 rounded-full bg-amber-600" />
            <div className="w-1 h-1 rounded-full bg-amber-500/70" />
            <div className="w-1 h-1 rounded-full bg-amber-600" />
          </div>

          {/* English Translation */}
          <div className="text-center">
            <p className="text-amber-900/90 font-body text-base md:text-lg leading-relaxed mb-4 italic">
              &quot;And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them. And He has put between you affection and mercy.&quot;
            </p>
            <p className="text-rose-600 font-heading text-sm font-light tracking-wide uppercase drop-shadow">
              Quran 30:21
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-rose-400" />
          <span className="text-amber-700 text-2xl">✦</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-rose-400" />
        </div>
      </div>
    </section>
  )
}
