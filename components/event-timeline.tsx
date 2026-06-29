'use client'

import React from 'react'
import { Clock, MapPin, Users, Heart } from 'lucide-react'

interface TimelineEvent {
  time: string
  title: string
  description: string
  icon: React.ReactNode
}

export function EventTimeline() {
  const events: TimelineEvent[] = [
    {
      time: '12:00 PM',
      title: 'Arrival',
      description: 'Guests begin to arrive at the venue',
      icon: <Users size={24} />,
    },
    {
      time: '12:15 PM',
      title: 'Nikah Ceremony',
      description: 'The marriage contract ceremony begins',
      icon: <Heart size={24} />,
    },
    {
      time: '12:45 PM',
      title: 'Khutbah & Duas',
      description: 'Islamic sermon and blessings',
      icon: <Heart size={24} />,
    },
    {
      time: '1:15 PM',
      title: 'Family Photos',
      description: 'Photography session with family members',
      icon: <Clock size={24} />,
    },
    {
      time: '2:00 PM',
      title: 'Lunch (Ziafat)',
      description: 'Join us for a blessed meal at the Valima venue',
      icon: <MapPin size={24} />,
    },
    {
      time: '4:00 PM',
      title: 'Celebration Ends',
      description: 'Safe travels and may Allah bless this union',
      icon: <Heart size={24} />,
    },
  ]

  return (
    <section className="min-h-screen bg-emerald-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-cream mb-4 font-light">
            Event Timeline
          </h2>
          <p className="text-cream/80 font-body text-sm md:text-base">
            A detailed schedule of the celebrations
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold via-gold to-gold/30" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12' : 'pl-12'} flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className="p-6 bg-emerald-950/50 border border-gold/30 rounded-lg backdrop-blur-sm hover:border-gold/60 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] max-w-xs w-full">
                    <p className="text-gold font-heading text-sm font-light uppercase tracking-wide mb-2">
                      {event.time}
                    </p>
                    <h3 className="text-cream font-heading text-lg font-light mb-2">
                      {event.title}
                    </h3>
                    <p className="text-cream/70 font-body text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="w-12 h-12 bg-emerald-950 border-3 border-gold rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <div className="text-gold">
                    {event.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
