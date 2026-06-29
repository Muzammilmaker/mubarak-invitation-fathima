'use client'

import React, { useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) return null

  return (
    <>
      <audio
        id="background-music"
        loop
        muted={isMuted}
        autoPlay
        className="hidden"
      >
        <source 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.Wedding%20Nasheed%20-%20Maruf%20Mohammad%20Jisan%20%20%D8%B9%D8%B1%D9%88%D8%B3%D8%A9%20%D8%A7%D9%84%D9%86%D9%88%D8%B1%20-%20Maruf%20Mohammad%20Jisan-Cp1MlzqWjkfnmdKOJ1TVCCgkWLPLT8.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-6 right-6 z-50 bg-gold/20 hover:bg-gold/30 border border-gold text-gold p-3 rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
        aria-label={isMuted ? 'Unmute music' : 'Mute music'}
      >
        {isMuted ? (
          <VolumeX size={24} />
        ) : (
          <Volume2 size={24} />
        )}
      </button>
    </>
  )
}
