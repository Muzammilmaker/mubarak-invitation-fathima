import { HeroSection } from '@/components/hero-section'
import { InvitationCard } from '@/components/invitation-card'
import { InShaAllah } from '@/components/in-sha-allah'
import { CountdownTimer } from '@/components/countdown-timer'
import { QuranVerse } from '@/components/quran-verse'
import { EventTimeline } from '@/components/event-timeline'
import { DressCode } from '@/components/dress-code'
import { DuaSection } from '@/components/dua-section'
import { Footer } from '@/components/footer'
import { BackgroundMusic } from '@/components/background-music'

export default function Page() {
  return (
    <main className="w-full bg-emerald-950 overflow-x-hidden">
      <BackgroundMusic />
      <HeroSection />
      <InvitationCard />
      <InShaAllah />
      <CountdownTimer />
      <QuranVerse />
      <EventTimeline />
      <DressCode />
      <DuaSection />
      <Footer />
    </main>
  )
}
