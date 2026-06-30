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
    <section className="py-20 px-4 relative" style={{ backgroundColor: '#E8D5C4' }}>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="font-heading text-4xl md:text-5xl font-light mb-4" style={{ color: '#3D2817' }}>Timeline of Events</h2>
        <div className="w-24 h-1 mx-auto rounded" style={{ backgroundImage: 'linear-gradient(to right, #C9A876, #C9A876, rgba(201, 168, 118, 0.3))' }} />
      </div>

      {/* Timeline */}
      <div className="max-w-3xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className={`flex gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline Icon */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gold/20 border-2 border-gold text-gold rounded-full flex items-center justify-center mb-4 shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] transition-shadow">
                {event.icon}
              </div>
              {index < events.length - 1 && <div className="w-1 h-20 bg-gradient-to-b from-gold to-gold/40" />}
            </div>

            {/* Content */}
            <div className="flex-1 pb-8">
              <p className="text-gold text-sm font-light tracking-widest uppercase mb-2">{event.time}</p>
              <h3 className="font-heading text-2xl text-white mb-2">{event.title}</h3>
              <p className="text-white font-body text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
