'use client'

import React from 'react'

export function DuaSection() {
  return (
    <section className="min-h-screen py-16 px-4 flex items-center justify-center" style={{ backgroundColor: '#A87860' }}>
      <div className="max-w-3xl w-full">
        {/* Main Container */}
        <div className="rounded-lg p-8 md:p-16" style={{ border: '4px solid rgba(245, 230, 211, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          {/* Decorative Top */}
          <div className="flex justify-center gap-3 mb-8">
            <span style={{ color: 'rgba(245, 230, 211, 0.5)' }}>✦</span>
            <span style={{ color: '#F5E6D3' }}>✦</span>
            <span style={{ color: 'rgba(245, 230, 211, 0.5)' }}>✦</span>
          </div>

          {/* Arabic Dua */}
          <div className="text-center mb-8">
            <p className="font-heading text-2xl md:text-3xl leading-relaxed rtl mb-4 drop-shadow" style={{ color: '#F5E6D3' }}>
              اللهم بارك لهما وبارك عليهما واجمع بينهما في خير
            </p>
          </div>

          {/* Translation */}
          <div className="text-center mb-8 pb-8" style={{ borderBottom: '2px solid rgba(245, 230, 211, 0.2)' }}>
            <p className="font-body text-base md:text-lg italic leading-relaxed" style={{ color: '#F5E6D3' }}>
              &quot;O Allah, bless them, bless upon them and unite them in goodness.&quot;
            </p>
          </div>

          {/* Blessing Message */}
          <div className="text-center">
            <p className="font-body text-sm md:text-base leading-relaxed mb-6" style={{ color: '#F5E6D3' }}>
              We humbly request all our beloved family and friends to remember this couple in your precious duas. Your blessings and good wishes are the greatest gifts for their new journey together.
            </p>
            <p className="font-heading text-lg font-light drop-shadow" style={{ color: '#F5E6D3' }}>
              Jazak Allah Khair
            </p>
            <p className="font-body text-sm mt-2" style={{ color: '#F5E6D3' }}>
              Thank you for being part of this blessed occasion
            </p>
          </div>

          {/* Decorative Bottom */}
          <div className="flex justify-center gap-3 mt-8 pt-8" style={{ borderTop: '2px solid rgba(245, 230, 211, 0.2)' }}>
            <span style={{ color: 'rgba(245, 230, 211, 0.5)' }}>✦</span>
            <span style={{ color: '#F5E6D3' }}>✦</span>
            <span style={{ color: 'rgba(245, 230, 211, 0.5)' }}>✦</span>
          </div>
        </div>
      </div>
    </section>
  )
}
