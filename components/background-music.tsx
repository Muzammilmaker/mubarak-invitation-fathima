'use client'

import React, { useEffect, useState, useRef } from 'react'
import { Volume2, VolumeX } from 'lucide-react'

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (isMuted) {
      audio.pause()
    } else {
      audio.play().catch((error) => {
        console.log('[v0] Audio playback error:', error)
      })
    }
  }, [isMuted])

  if (!isLoaded) return null

  return (
    <>
      <audio
        ref={audioRef}
        id="background-music"
        loop
        preload="auto"
        crossOrigin="anonymous"
        className="hidden"
      >
        <source 
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.Wedding%20Nasheed%20-%20Maruf%20Mohammad%20Jisan%20%20%D8%B9%D8%B1%D9%88%D8%B3%D8%A9%20%D8%A7%D9%84%D9%86%D9%88%D8%B1%20-%20Maruf%20Mohammad%20Jisan-1JxhHaTXXDgWMx1KqbkDC9m8qxb4Xw.mp3"
          type="audio/mpeg"
        />
      </audio>

      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.4)] hover:scale-110"
        aria-label={isMuted ? 'Play music' : 'Pause music'}
        title={isMuted ? 'Play Wedding Nasheed' : 'Pause Music'}
      >
        {isMuted ? (
          <Volume2 size={24} />
        ) : (
          <VolumeX size={24} />
        )}
      </button>
    </>
  )
}
