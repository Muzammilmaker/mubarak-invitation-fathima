'use client'

import React from 'react'

export function InvitationCard() {
  return (
    <section id="invitation" className="min-h-screen bg-emerald-950 py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full">
        {/* Card Container */}
        <div className="bg-cream/95 rounded-lg shadow-2xl overflow-hidden border-2 border-gold">
          {/* Top Border */}
          <div className="h-1 bg-gradient-to-r from-gold via-gold to-gold/50" />

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12 pb-8 border-b-2 border-gold/30">
              <p className="text-gold text-sm tracking-widest uppercase font-light mb-2">In the name of Allah the most Beneficent & most merciful</p>
              <h2 className="font-heading text-2xl md:text-3xl text-emerald-950 font-light mb-4">
                Mrs. Malik Basha Sahib
              </h2>
              <p className="text-emerald-900 font-body text-sm md:text-base leading-relaxed">
                Have immense pleasure in inviting<br />
                you to attend Nikah and Valima reception of her son
              </p>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h1 className="font-heading text-3xl md:text-4xl text-emerald-950 font-light mb-2">
                  M. Mubarak Basha <span className="text-xs text-emerald-900 font-body">BCA.</span>
                </h1>
                <p className="text-emerald-900 font-body text-xs md:text-sm">
                  Paternal Grand Sio Late Janab Bashu Sahib
                </p>
              </div>

              <div className="text-center mb-2">
                <p className="font-heading text-lg text-emerald-950 font-light">With</p>
              </div>

              <div className="text-center">
                <h2 className="font-heading text-2xl md:text-3xl text-emerald-950 font-light mb-2">
                  A. Fathima Humera
                </h2>
                <p className="text-emerald-900 font-body text-xs md:text-sm">
                  Dio Janab R. Ahmad Basha Sahib
                </p>
              </div>
            </div>

            {/* IN SHA ALLAH */}
            <div className="text-center mb-12 py-6 border-y-2 border-gold/30">
              <p className="font-heading text-2xl text-gold font-light tracking-wide">IN SHA ALLAH</p>
            </div>

            {/* Nikah Details */}
            <div className="mb-8 p-6 bg-emerald-50 rounded">
              <h3 className="font-heading text-lg text-emerald-950 font-light mb-4 text-center">Nikah :</h3>
              <div className="space-y-2 text-emerald-900 font-body text-sm">
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
            <div className="mb-8 p-6 bg-emerald-50 rounded">
              <h3 className="font-heading text-lg text-emerald-950 font-light mb-4 text-center">Valima :</h3>
              <div className="space-y-2 text-emerald-900 font-body text-sm">
                <p className="text-center">
                  (Ziafat) Lunch after Zuhar Namaz<br />
                  @ No.778, H.B.House, Oost Street,<br />
                  Khaderpet, Vaniyambaadi - 635 751.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-6 border-t-2 border-gold/30">
              <p className="font-body text-emerald-900 font-light text-sm">
                Your blessings are highly appreciated
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gold/20">
              <div className="text-center">
                <p className="font-heading text-emerald-950 font-light mb-2">Mrs. Malik Basha</p>
                <p className="text-emerald-900 font-body text-xs space-y-1">
                  <span>67/A1 5th Street Teachers colony,</span><br />
                  <span>Kaderpet Vaniyambadi 635 751.</span><br />
                  <span className="block mt-1">Cell: 8778443588</span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Border */}
          <div className="h-1 bg-gradient-to-r from-gold/50 via-gold to-gold" />
        </div>
      </div>
    </section>
  )
}
