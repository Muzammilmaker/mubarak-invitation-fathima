'use client'

import React from 'react'

export function HeroBackground() {
  return (
    <div className="absolute inset-0 w-full h-full" style={{ backgroundColor: '#E8D5C4' }}>
      {/* Simple gradient overlay */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(135deg, #E8D5C4 0%, #F0D9C8 50%, #E8D5C4 100%)' }} />
    </div>
  )
}
