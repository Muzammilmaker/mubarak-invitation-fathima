'use client'

import React from 'react'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="py-12 px-4" style={{ backgroundColor: '#3D2817', borderTop: '2px solid rgba(201, 168, 118, 0.3)' }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <div className="mb-8">
          <p className="font-heading text-2xl md:text-3xl font-light mb-4 drop-shadow" style={{ color: '#C9A876' }}>
            Jazak Allah Khair
          </p>
          <p className="font-body text-sm md:text-base" style={{ color: '#F5E6D3' }}>
            Thank you for your love and blessings
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="flex-1 h-px" style={{ backgroundImage: 'linear-gradient(to right, transparent, #C9A876)' }} />
          <Heart size={16} style={{ color: '#C9A876' }} />
          <div className="flex-1 h-px" style={{ backgroundImage: 'linear-gradient(to left, transparent, #C9A876)' }} />
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="font-heading font-light mb-3" style={{ color: '#C9A876' }}>Get in Touch</h3>
          <p className="font-body text-xs md:text-sm space-y-1" style={{ color: '#F5E6D3' }}>
            <span className="block">Mrs. Malik Basha Sahib</span>
            <span className="block">67/A1 5th Street Teachers Colony</span>
            <span className="block">Kaderpet, Vaniyambadi - 635 751</span>
            <span className="block mt-2 font-medium">Cell: 8778443588</span>
          </p>
        </div>

        {/* Closing */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(201, 168, 118, 0.2)' }}>
          <p className="font-body text-xs md:text-sm" style={{ color: '#F5E6D3' }}>
            May Allah bless this union with love, compassion, and happiness<br />
            <span className="italic">In Sha Allah - By the Will of Allah</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(201, 168, 118, 0.1)' }}>
          <p className="font-body text-xs" style={{ color: '#C9A876' }}>
            Created with ❤️ in celebration of love and faith
          </p>
        </div>
      </div>
    </footer>
  )
}
