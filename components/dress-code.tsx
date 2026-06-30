'use client'

import React from 'react'

export function DressCode() {
  return (
    <section className="min-h-screen bg-emerald-950 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-gold font-light mb-4">Dress Code</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gold via-gold to-gold/50 mx-auto rounded" />
          <p className="text-gold/80 font-body text-sm mt-4">Formal Islamic Wedding Attire</p>
        </div>

        {/* Groom and Bride Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Groom */}
          <div className="text-center p-8 border-2 border-gold/30 rounded-lg bg-emerald-900/40">
            <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', fontWeight: '400', color: '#D4AF37', marginBottom: '1.5rem' }}>
              For the Groom
            </h3>
            <ul className="text-cream/80 font-body text-sm space-y-3 text-left">
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Traditional Sherwani in Emerald Green or Rich Maroon</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Ornate Gold Embroidery and Elegant Buttons</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Formal Turban or Traditional Head Covering</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Formal Trousers in Complementary Color</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Elegant Jewelry and Accessories</span>
              </li>
            </ul>
          </div>

          {/* Bride */}
          <div className="text-center p-8 border-2 border-gold/30 rounded-lg bg-emerald-900/40">
            <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '2.5rem', fontWeight: '400', color: '#D4AF37', marginBottom: '1.5rem' }}>
              For the Bride
            </h3>
            <ul className="text-cream/80 font-body text-sm space-y-3 text-left">
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Elegant Lehenga or Formal Bridal Gown in Rose, Gold, or Cream</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Intricate Embroidery and Ornamental Details</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Traditional Bridal Veil or Hijab with Golden Trim</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Elaborate Jewelry and Accessories</span>
              </li>
              <li className="flex gap-2">
                <span className="text-gold">✓</span>
                <span>Formal Islamic Wedding Attire</span>
              </li>
            </ul>
          </div>
        </div>

        {/* General Dress Code */}
        <div className="p-8 border-2 border-gold/30 rounded-lg bg-emerald-900/40">
          <h3 className="font-heading text-2xl text-gold mb-6 text-center">General Dress Code for Guests</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-heading text-lg text-gold mb-3">For Men</p>
              <ul className="text-cream/80 font-body text-sm space-y-2">
                <li>Traditional Kurta & Pajama</li>
                <li>or Formal Sherwani</li>
                <li>Traditional Head Covering</li>
                <li>Formal Accessories</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-gold mb-3">For Women</p>
              <ul className="text-cream/80 font-body text-sm space-y-2">
                <li>Elegant Saree or Salwar Kameez</li>
                <li>Traditional Lehenga</li>
                <li>Modest and Formal Attire</li>
                <li>Elegant Jewelry & Hijab</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-gold mb-3">Color Palette</p>
              <ul className="text-cream/80 font-body text-sm space-y-2">
                <li>Emerald Green & Gold</li>
                <li>Rose Pink & Gold</li>
                <li>Deep Maroon</li>
                <li>Cream & Ivory</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
