'use client'

import React from 'react'

export function InvitationCard() {
  return (
    <section id="invitation" className="min-h-screen py-16 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8D5C4' }}>
      <div className="max-w-4xl w-full">
        {/* Card Container */}
        <div className="rounded-lg shadow-2xl overflow-hidden" style={{ backgroundColor: '#F5E6D3', border: '1px solid rgba(169, 132, 94, 0.2)' }}>
          {/* Top Border */}
          <div className="h-1" style={{ backgroundColor: '#C9A876' }} />

          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="text-center mb-12 pb-8" style={{ borderBottom: '2px solid rgba(169, 132, 94, 0.2)' }}>
              <p className="text-sm tracking-widest uppercase font-light mb-3" style={{ color: '#C9A876' }}>In the name of Allah the most Beneficent & most merciful</p>
              <h2 className="font-heading text-2xl md:text-3xl font-light mb-4" style={{ color: '#3D2817' }}>
                Mrs. Malik Basha Sahib
              </h2>
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#5C4033' }}>
                Have immense pleasure in inviting<br />
                you to attend Nikah and Valima reception of her son
              </p>
            </div>

            {/* Main Content */}
            <div className="mb-12">
              <div className="text-center mb-8">
                <h1 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', fontWeight: '400', color: '#C9A876', textShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  M. Mubarak Basha
                </h1>
                <span className="text-xs font-body block" style={{ color: '#5C4033' }}>BCA. | Paternal Grand Sio Late Janab Bashu Sahib</span>
              </div>

              <div className="text-center mb-2">
                <p className="font-heading text-lg font-light" style={{ color: '#3D2817' }}>&</p>
              </div>

              <div className="text-center">
                <h2 style={{ fontFamily: 'var(--font-script)', fontSize: '3rem', fontWeight: '400', color: '#D4967D', textShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
                  A. Fathima Humera
                </h2>
                <p className="font-body text-xs md:text-sm" style={{ color: '#5C4033' }}>
                  Dio Janab R. Ahmad Basha Sahib
                </p>
              </div>
            </div>

            {/* IN SHA ALLAH */}
            <div className="text-center mb-12 py-6" style={{ borderTop: '2px solid rgba(169, 132, 94, 0.2)', borderBottom: '2px solid rgba(169, 132, 94, 0.2)' }}>
              <p className="font-heading text-2xl font-light tracking-wide" style={{ color: '#C9A876' }}>IN SHA ALLAH</p>
            </div>

            {/* Nikah Details */}
            <div className="mb-8 p-6 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <h3 className="font-heading text-lg font-light mb-4 text-center" style={{ color: '#3D2817' }}>Nikah :</h3>
              <div className="space-y-2 font-body text-sm" style={{ color: '#3D2817' }}>
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
            <div className="mb-8 p-6 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}>
              <h3 className="font-heading text-lg font-light mb-4 text-center" style={{ color: '#3D2817' }}>Valima :</h3>
              <div className="space-y-2 font-body text-sm" style={{ color: '#3D2817' }}>
                <p className="text-center">
                  (Ziafat) Lunch after Zuhar Namaz<br />
                  @ No.778, H.B.House, Oost Street,<br />
                  Khaderpet, Vaniyambaadi - 635 751.
                </p>
              </div>
            </div>

            {/* Closing */}
            <div className="text-center pt-6" style={{ borderTop: '2px solid rgba(169, 132, 94, 0.2)' }}>
              <p className="font-body font-light text-sm italic" style={{ color: '#3D2817' }}>
                Your blessings are highly appreciated
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(169, 132, 94, 0.1)' }}>
              <div className="text-center">
                <p className="font-heading font-light mb-2" style={{ color: '#3D2817' }}>Mrs. Malik Basha</p>
                <p className="font-body text-xs space-y-1" style={{ color: '#5C4033' }}>
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
