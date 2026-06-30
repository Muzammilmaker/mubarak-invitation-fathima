'use client'

import React from 'react'

export function InShaAllah() {
  return (
    <section className="min-h-screen bg-emerald-950 py-20 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* IN SHA ALLAH Header */}
          <div className="mb-16">
            <h2 className="font-heading text-5xl md:text-6xl text-gold font-light tracking-widest mb-8">IN SHA ALLAH</h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mb-16" />
          </div>

          {/* Nikah Details */}
          <div className="mb-24">
            <h3 className="font-heading text-2xl text-gold font-light mb-8">Nikah:</h3>
            <div className="space-y-4 text-white font-body text-lg">
              <p>On Sunday, 16th August 2026, @ 12:15 p.m.</p>
              <p>3rd Rabi Al-Awwal 1448 Hijri</p>
              <p className="mt-8">@ Masjid-e-Noor, Habeebabad, Newdelhi,</p>
              <p>Khaderpet, Vaniyambaadi - 635 751.</p>
            </div>
          </div>

          {/* Center Divider */}
          <div className="my-16">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          {/* Valima Details */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl text-gold font-light mb-8">Valima:</h3>
            <div className="space-y-4 text-white font-body text-lg">
              <p>(Ziafat) Lunch after Zuhar Namaz</p>
              <p>@ No.778, H.B.House, Oost Street,</p>
              <p>Khaderpet, Vaniyambaadi - 635 751.</p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="mt-16">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
