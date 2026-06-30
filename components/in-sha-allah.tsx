'use client'

import React from 'react'

export function InShaAllah() {
  return (
    <section className="min-h-screen py-20 px-4 flex items-center justify-center" style={{ backgroundColor: '#A87860' }}>
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* IN SHA ALLAH Header */}
          <div className="mb-16">
            <h2 className="font-heading text-5xl md:text-6xl font-light tracking-widest mb-8" style={{ color: '#F5E6D3' }}>IN SHA ALLAH</h2>
            <div className="w-full h-px mb-16" style={{ backgroundImage: 'linear-gradient(to right, transparent, #F5E6D3, transparent)' }} />
          </div>

          {/* Nikah Details */}
          <div className="mb-24">
            <h3 className="font-heading text-2xl font-light mb-8" style={{ color: '#F5E6D3' }}>Nikah:</h3>
            <div className="space-y-4 font-body text-lg" style={{ color: '#F5E6D3' }}>
              <p>On Sunday, 16th August 2026, @ 12:15 p.m.</p>
              <p>3rd Rabi Al-Awwal 1448 Hijri</p>
              <p className="mt-8">@ Masjid-e-Noor, Habeebabad, Newdelhi,</p>
              <p>Khaderpet, Vaniyambaadi - 635 751.</p>
            </div>
          </div>

          {/* Center Divider */}
          <div className="my-16">
            <div className="w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, #F5E6D3, transparent)' }} />
          </div>

          {/* Valima Details */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-light mb-8" style={{ color: '#F5E6D3' }}>Valima:</h3>
            <div className="space-y-4 font-body text-lg" style={{ color: '#F5E6D3' }}>
              <p>(Ziafat) Lunch after Zuhar Namaz</p>
              <p>@ No.778, H.B.House, Oost Street,</p>
              <p>Khaderpet, Vaniyambaadi - 635 751.</p>
            </div>
          </div>

          {/* Bottom Divider */}
          <div className="mt-16">
            <div className="w-full h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, #F5E6D3, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
