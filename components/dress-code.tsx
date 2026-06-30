'use client'

import React from 'react'
import Image from 'next/image'

export function DressCode() {
  return (
    <section className="min-h-screen py-16 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8D5C4' }}>
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-4" style={{ color: '#3D2817' }}>Dress Code</h2>
          <div className="w-24 h-1 mx-auto rounded" style={{ backgroundImage: 'linear-gradient(to right, #C9A876, #C9A876, rgba(201, 168, 118, 0.3))' }} />
          <p className="font-body text-sm mt-4" style={{ color: '#C9A876' }}>Formal Islamic Wedding Attire</p>
        </div>

        {/* Main Layout: Groom | Islamic Calligraphy | Bride */}
        <div className="grid md:grid-cols-3 gap-8 items-center mb-16">
          {/* Groom Box */}
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '2px solid rgba(201, 168, 118, 0.3)' }}>
            <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', fontWeight: '400', color: '#C9A876', marginBottom: '1rem' }}>
              M. Mubarak Basha
            </h3>
            <p className="font-body text-sm mb-4" style={{ color: '#3D2817' }}>
              Traditional Sherwani in Emerald Green or Rich Maroon with ornate gold embroidery
            </p>
            <p className="font-body text-xs italic" style={{ color: '#C9A876' }}>
              Formal Turban or Traditional Head Covering
            </p>
          </div>

          {/* Center: Islamic Calligraphy Circle */}
          <div className="flex justify-center items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              <Image
                src="/bismillah-circle.png"
                alt="Islamic Calligraphy - Bismillah"
                width={280}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Bride Box */}
          <div className="text-center p-8 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '2px solid rgba(201, 168, 118, 0.3)' }}>
            <h3 style={{ fontFamily: 'var(--font-script)', fontSize: '2rem', fontWeight: '400', color: '#D4967D', marginBottom: '1rem' }}>
              A. Fathima Humera
            </h3>
            <p className="font-body text-sm mb-4" style={{ color: '#3D2817' }}>
              Elegant Lehenga or Formal Bridal Gown in Rose, Gold, or Cream with intricate embroidery
            </p>
            <p className="font-body text-xs italic" style={{ color: '#C9A876' }}>
              Traditional Bridal Veil or Hijab with Golden Trim
            </p>
          </div>
        </div>

        {/* Couple Illustration */}
        <div className="flex justify-center mb-16">
          <div className="relative w-full max-w-md h-96 flex items-center justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9c07uZIY5xB9PFW2EWwpf9CTltQHxW.png"
              alt="Islamic Wedding Couple - Bride and Groom"
              width={400}
              height={500}
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
