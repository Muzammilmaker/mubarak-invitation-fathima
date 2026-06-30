'use client'

import React from 'react'
import Image from 'next/image'

export function DressCode() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-slate-50 to-amber-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-amber-900 font-light mb-4">Dress Code</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 mx-auto rounded" />
          <p className="text-amber-800 font-body text-sm mt-4">Formal Islamic Wedding Attire</p>
        </div>

        {/* Illustrations Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Groom */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-96 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-2xl opacity-60" />
              <Image
                src="/groom-illustration.png"
                alt="Groom Attire"
                width={300}
                height={400}
                className="relative z-10 object-contain drop-shadow-lg"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="groom-text mb-4">For the Groom</h3>
              <div className="bg-gradient-to-r from-amber-100 to-transparent p-6 rounded-lg border border-amber-300">
                <ul className="text-amber-900 font-body text-sm space-y-2 text-left">
                  <li className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>Traditional Sherwani in Emerald Green or Rich Maroon</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>Ornate Gold Embroidery and Elegant Buttons</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>Formal Turban or Traditional Head Covering</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>Formal Trousers in Complementary Color</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-amber-700">✓</span>
                    <span>Elegant Jewelry and Accessories</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bride */}
          <div className="flex flex-col items-center">
            <div className="relative w-full h-96 mb-8 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-amber-100 rounded-2xl opacity-60" />
              <Image
                src="/bride-illustration.png"
                alt="Bride Attire"
                width={300}
                height={400}
                className="relative z-10 object-contain drop-shadow-lg"
                priority
              />
            </div>
            <div className="text-center">
              <h3 className="bride-text mb-4">For the Bride</h3>
              <div className="bg-gradient-to-r from-transparent to-rose-100 p-6 rounded-lg border border-amber-300">
                <ul className="text-amber-900 font-body text-sm space-y-2 text-left">
                  <li className="flex gap-2">
                    <span className="text-rose-600">✓</span>
                    <span>Elegant Lehenga or Formal Bridal Gown in Rose, Gold, or Cream</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-600">✓</span>
                    <span>Intricate Embroidery and Ornamental Details</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-600">✓</span>
                    <span>Traditional Bridal Veil or Hijab with Golden Trim</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-600">✓</span>
                    <span>Elaborate Jewelry and Accessories</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-rose-600">✓</span>
                    <span>Formal Islamic Wedding Attire</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* General Dress Code */}
        <div className="mt-16 p-8 bg-gradient-to-r from-amber-100/40 to-rose-100/40 rounded-lg border-2 border-amber-400 illumination-glow">
          <h3 className="font-heading text-2xl text-amber-900 mb-6 text-center">General Dress Code for Guests</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="font-heading text-lg text-rose-600 mb-3">For Men</p>
              <ul className="text-amber-900 font-body text-sm space-y-2">
                <li>Traditional Kurta & Pajama</li>
                <li>or Formal Sherwani</li>
                <li>Traditional Head Covering</li>
                <li>Formal Accessories</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-rose-600 mb-3">For Women</p>
              <ul className="text-amber-900 font-body text-sm space-y-2">
                <li>Elegant Saree or Salwar Kameez</li>
                <li>Traditional Lehenga</li>
                <li>Modest and Formal Attire</li>
                <li>Elegant Jewelry & Hijab</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="font-heading text-lg text-rose-600 mb-3">Color Palette</p>
              <ul className="text-amber-900 font-body text-sm space-y-2">
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
