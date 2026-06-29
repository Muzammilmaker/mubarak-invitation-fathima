'use client'

import React from 'react'
import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-200 to-rose-100 border-t-4 border-amber-400 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Message */}
        <div className="mb-8">
          <p className="font-heading text-2xl md:text-3xl text-rose-600 font-light mb-4 drop-shadow">
            Jazak Allah Khair
          </p>
          <p className="text-amber-900/80 font-body text-sm md:text-base">
            Thank you for your love and blessings
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 my-6">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-400 to-rose-400" />
          <Heart size={16} className="text-rose-500" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-400 to-rose-400" />
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <h3 className="text-amber-900 font-heading font-light mb-3">Get in Touch</h3>
          <p className="text-amber-800/70 font-body text-xs md:text-sm space-y-1">
            <span className="block">Mrs. Malik Basha Sahib</span>
            <span className="block">67/A1 5th Street Teachers Colony</span>
            <span className="block">Kaderpet, Vaniyambadi - 635 751</span>
            <span className="block mt-2 font-medium">Cell: 8778443588</span>
          </p>
        </div>

        {/* Closing */}
        <div className="pt-8 border-t border-amber-400/50">
          <p className="text-amber-900/60 font-body text-xs md:text-sm">
            May Allah bless this union with love, compassion, and happiness<br />
            <span className="italic">In Sha Allah - By the Will of Allah</span>
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-amber-400/30">
          <p className="text-amber-800/40 font-body text-xs">
            Created with 💕 in celebration of love and faith
          </p>
        </div>
      </div>
    </footer>
  )
}
