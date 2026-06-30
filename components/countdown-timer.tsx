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
      <div className="w-20 h-20 md:w-28 md:h-28 border-2 border-gold rounded-lg flex items-center justify-center bg-emerald-950/50 backdrop-blur-sm hover:border-gold/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]">
        <span className="font-heading text-3xl md:text-4xl text-gold font-light">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <p className="mt-3 text-gold text-xs md:text-sm uppercase tracking-widest font-light">
        {label}
      </p>
    </div>
  )

  return (
    <section className="min-h-screen bg-emerald-900 py-16 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-4 font-light">
          Countdown to the Celebration
        </h2>
        <p className="text-white font-body mb-12 text-sm md:text-base">
          The special day is almost here
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <TimerBox value={timeRemaining.days} label="Days" />
          <TimerBox value={timeRemaining.hours} label="Hours" />
          <TimerBox value={timeRemaining.minutes} label="Minutes" />
          <TimerBox value={timeRemaining.seconds} label="Seconds" />
        </div>

        <div className="mt-12 p-6 border-2 border-gold/30 rounded-lg bg-emerald-950/30 backdrop-blur-sm">
          <p className="text-white font-body text-sm md:text-base italic">
            ما شاء الله - Alhamdulillah for this blessed occasion
          </p>
        </div>
      </div>
    </section>
  )
}
