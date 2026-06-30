'use client'

import React, { useState, useEffect } from 'react'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    const calculateTimeRemaining = () => {
      // Wedding date: August 16, 2026 at 12:15 PM
      const weddingDate = new Date(2026, 7, 16, 12, 15, 0).getTime()
      const now = new Date().getTime()
      const difference = weddingDate - now

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeRemaining()
    const interval = setInterval(calculateTimeRemaining, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isLoaded) {
    return (
      <section className="min-h-screen bg-emerald-900 py-16 px-4 flex items-center justify-center">
        <div className="text-white text-center">Loading...</div>
      </section>
    )
  }

  const TimerBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center shadow-lg transition-all duration-300" style={{ backgroundColor: '#FFFFFF', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
        <span className="font-heading text-3xl md:text-4xl font-light" style={{ color: '#A87860' }}>
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="mt-3 text-xs md:text-sm uppercase tracking-widest font-light" style={{ color: '#A87860' }}>
        {label}
      </p>
    </div>
  )

  return (
    <section className="min-h-screen py-16 px-4 flex items-center justify-center" style={{ backgroundColor: '#E8D5C4' }}>
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-heading text-3xl md:text-4xl mb-4 font-light" style={{ color: '#3D2817' }}>
          Countdown to the Celebration
        </h2>
        <p className="font-body mb-12 text-sm md:text-base" style={{ color: '#5C4033' }}>
          The special day is almost here
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <TimerBox value={timeRemaining.days} label="Days" />
          <TimerBox value={timeRemaining.hours} label="Hours" />
          <TimerBox value={timeRemaining.minutes} label="Minutes" />
          <TimerBox value={timeRemaining.seconds} label="Seconds" />
        </div>

        <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)', borderTop: '2px solid #C9A876', borderBottom: '2px solid #C9A876' }}>
          <p className="font-body text-sm md:text-base italic" style={{ color: '#3D2817' }}>
            ما شاء الله - Alhamdulillah for this blessed occasion
          </p>
        </div>
      </div>
    </section>
  )
}
