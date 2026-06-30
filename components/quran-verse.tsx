'use client'

import React from 'react'

export function QuranVerse() {
  return (
    <section className="min-h-screen py-16 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8D5C4' }}>
      <div className="max-w-3xl w-full">
        {/* Decorative Top Border */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex-1 h-px" style={{ backgroundColor: '#C9A876' }} />
          <span className="text-2xl" style={{ color: '#C9A876' }}>✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#C9A876' }} />
        </div>

        {/* Verse Container */}
        <div className="rounded-lg p-8 md:p-12" style={{ border: '2px solid rgba(201, 168, 118, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          {/* Arabic Verse */}
          <div className="text-center mb-8">
            <p className="font-heading text-xl md:text-2xl leading-relaxed mb-4 rtl drop-shadow" style={{ color: '#C9A876' }}>
              وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا
            </p>
            <p className="font-body text-sm" style={{ color: '#A87860' }}>
              وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
            </p>
          </div>

          {/* Divider */}
          <div className="flex justify-center gap-2 my-6">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#C9A876' }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(201, 168, 118, 0.5)' }} />
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#C9A876' }} />
          </div>

          {/* English Translation */}
          <div className="text-center">
            <p className="font-body text-base md:text-lg leading-relaxed mb-4 italic" style={{ color: '#3D2817' }}>
              &quot;And among His signs is that He created for you spouses from among yourselves that you may find tranquility in them. And He has put between you affection and mercy.&quot;
            </p>
            <p className="font-heading text-sm font-light tracking-wide uppercase drop-shadow" style={{ color: '#C9A876' }}>
              Quran 30:21
            </p>
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="flex items-center justify-center gap-4 mt-12">
          <div className="flex-1 h-px" style={{ backgroundColor: '#C9A876' }} />
          <span className="text-2xl" style={{ color: '#C9A876' }}>✦</span>
          <div className="flex-1 h-px" style={{ backgroundColor: '#C9A876' }} />
        </div>
      </div>
    </section>
  )
}
