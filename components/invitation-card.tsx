'use client'

import React from 'react'

export function InvitationCard() {
  return (
    <section id="invitation" className="min-h-screen py-16 px-4 flex items-center justify-center relative overflow-hidden" style={{
      backgroundImage: 'url(/islamic-wedding-bg.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="max-w-4xl w-full relative z-10">
        {/* Card Container */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl shadow-2xl overflow-hidden border-2 border-amber-400 illumination-glow backdrop-blur-sm">
          {/* Top Border */}
          <div className="h-2 bg-gradient-to-r from-amber-600 via-rose-500 to-amber-400 ornament-top" />

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12 pb-8 border-b-2 border-amber-300">
              <p className="text-amber-700 text-sm tracking-widest uppercase font-light mb-3 drop-shadow">In the name of Allah the most Beneficent & most merciful</p>
              <h2 className="font-heading text-2xl md:text-3xl text-amber-900 font-light mb-4">
                Mrs. Malik Basha Sahib
              </h2>
              <p className="text-amber-800 font-body text-sm md:text-base leading-relaxed">
                Have immense pleasure in inviting<br />
                you to attend Nikah and Valima reception of her son
              </p>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <div className="text-center mb-8 p-6 bg-gradient-to-r from-amber-100 to-transparent rounded-lg">
                <h1 className="groom-text mb-2 drop-shadow">
                  M. Mubarak Basha
                </h1>
                <span className="text-xs text-amber-700 font-body block">BCA. | Paternal Grand Sio Late Janab Bashu Sahib</span>
              </div>

              <div className="text-center mb-2">
                <p className="font-heading text-lg text-amber-900 font-light">With</p>
              </div>

              <div className="text-center p-6 bg-gradient-to-r from-transparent to-rose-100 rounded-lg">
                <h2 className="bride-text mb-2">
                  A. Fathima Humera
                </h2>
                <p className="text-amber-800 font-body text-xs md:text-sm">
                  Dio Janab R. Ahmad Basha Sahib
                </p>
              </div>
            </div>

            {/* IN SHA ALLAH */}
            <div className="text-center mb-12 py-6 border-y-2 border-amber-400 glow-pulse">
              <p className="font-heading text-2xl text-rose-600 font-light tracking-wide">IN SHA ALLAH</p>
            </div>

            {/* Nikah Details */}
            <div className="mb-8 p-6 bg-gradient-to-r from-amber-100 to-rose-100 rounded-lg border border-amber-300">
              <h3 className="font-heading text-lg text-amber-900 font-light mb-4 text-center">Nikah :</h3>
              <div className="space-y-2 text-amber-900 font-body text-sm">
                <p className="text-center">
                  On Sunday, 16th August 2026, @ 12:15 p.m.<br />
                  3rd Rabi Al-Awwal 1448 Hijri
                </p>
                <p className="text-center mt-4">
                  @ Masjid-e-Noor, Habeebabad, Newdelhi,<br />
                  Khaderpet, Vaniyambaadi - 635 751.
                </p>
              </div>
            </div>

            {/* Valima Details */}
            <div className="mb-8 p-6 bg-gradient-to-r from-rose-100 to-amber-100 rounded-lg border border-amber-300">
              <h3 className="font-heading text-lg text-amber-900 font-light mb-4 text-center">Valima :</h3>
              <div className="space-y-2 text-amber-900 font-body text-sm">
                <p className="text-center">
                  (Ziafat) Lunch after Zuhar Namaz<br />
                  @ No.778, H.B.House, Oost Street,<br />
                  Khaderpet, Vaniyambaadi - 635 751.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-6 border-t-2 border-amber-400">
              <p className="font-body text-amber-800 font-light text-sm italic">
                Your blessings are highly appreciated
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-amber-300">
              <div className="text-center">
                <p className="font-heading text-amber-900 font-light mb-2">Mrs. Malik Basha</p>
                <p className="text-amber-800 font-body text-xs space-y-1">
                  <span>67/A1 5th Street Teachers colony,</span><br />
                  <span>Kaderpet Vaniyambadi 635 751.</span><br />
                  <span className="block mt-1">Cell: 8778443588</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="h-2 bg-gradient-to-r from-amber-400 via-rose-500 to-amber-600 ornament-top" />
        </div>
      </div>
    </section>
  )
}
